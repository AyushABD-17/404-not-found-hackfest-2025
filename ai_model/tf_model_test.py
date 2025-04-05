import os
import tensorflow as tf
from transformers import AutoTokenizer, TFAutoModelForSequenceClassification

# Define paths
MODEL_DIR = "pretrained_sentiment"
MODEL_WEIGHTS = f"{MODEL_DIR}/tf_model.h5"

# Load tokenizer
tokenizer = AutoTokenizer.from_pretrained(MODEL_DIR)
model = TFAutoModelForSequenceClassification.from_pretrained("cardiffnlp/twitter-roberta-base-sentiment")

# Load weights
model.load_weights(MODEL_WEIGHTS)

# Function to predict sentiment
def predict_sentiment(text):
    inputs = tokenizer(text, return_tensors="tf", padding=True, truncation=True, max_length=512)
    logits = model(**inputs).logits
    sentiment = tf.argmax(logits, axis=-1).numpy()[0]

    labels = ["Negative", "Neutral", "Positive"] 
    return labels[sentiment]

# Example: 
user_input = input("Enter a tweet: ")
print("Sentiment:", predict_sentiment(user_input))
