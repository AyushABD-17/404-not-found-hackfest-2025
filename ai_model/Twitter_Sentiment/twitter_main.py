import tweepy
import time
import pandas as pd
import tensorflow as tf
from transformers import AutoTokenizer, TFAutoModelForSequenceClassification
import numpy as np
import os
from dotenv import load_dotenv

# Load environment variables
load_dotenv()
BEARER_TOKEN = os.getenv("BEARER_TOKEN")

# Initialize the Tweepy client
client = tweepy.Client(bearer_token=BEARER_TOKEN, wait_on_rate_limit=True)

# Load the sentiment model and tokenizer
MODEL_PATH = "pretrained_sentiment"
tokenizer = AutoTokenizer.from_pretrained(MODEL_PATH)
model = TFAutoModelForSequenceClassification.from_pretrained(MODEL_PATH)

def fetch_tweets(hashtag, count=10):
    """
    Fetch recent tweets containing the given hashtag that are in English.
    Handles rate limit errors (429) and pauses until limits reset.
    """
    query = f"#{hashtag} -is:retweet lang:en"
    while True:
        try:
            response = client.search_recent_tweets(
                query=query,
                max_results=count,
                tweet_fields=["created_at", "text"]
            )
            if response.data is None:
                print("No tweets found.")
                return []
            return response.data
        except tweepy.TooManyRequests as e:
            reset_timestamp = int(e.response.headers.get("x-rate-limit-reset", time.time() + 900))
            sleep_duration = max(reset_timestamp - int(time.time()), 60)
            print(f"Rate limit exceeded. Sleeping for {sleep_duration} seconds.")
            time.sleep(sleep_duration)
        except tweepy.TweepyException as e:
            print(f"An error occurred: {e}")
            return []

def predict_sentiment(text):
    """
    Predicts sentiment of a tweet using the pre-trained model.
    Returns a label: Positive, Neutral, or Negative.
    """
    inputs = tokenizer(text, return_tensors="tf", truncation=True, padding=True, max_length=128)
    logits = model(**inputs).logits
    probabilities = tf.nn.softmax(logits, axis=-1).numpy()[0]
    label_map = {0: "Negative", 1: "Neutral", 2: "Positive"}
    return label_map[np.argmax(probabilities)], probabilities[np.argmax(probabilities)]

# Fetch tweets
tweets = fetch_tweets("War2", count=10)

# Process tweets and predict sentiment
data = []
for tweet in tweets:
    sentiment, confidence = predict_sentiment(tweet.text)
    data.append([tweet.created_at, tweet.text, sentiment, confidence])

# Save to CSV
df = pd.DataFrame(data, columns=["Timestamp", "Tweet", "Sentiment", "Confidence"])
df.to_csv("tweets_sentiment.csv", index=False)

print("Tweets and sentiments saved to tweets_sentiment.csv")
