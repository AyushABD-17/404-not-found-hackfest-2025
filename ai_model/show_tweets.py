import tweepy
import time

# Replace with your actual free-tier Bearer Token
BEARER_TOKEN = "AAAAAAAAAAAAAAAAAAAAAGhm0QEAAAAALY3SXW1R2UsGLzz9vccYERGeXnk%3DRsFBz2KScxlB9rFDYNKiryiVcRJ8vshO5TC9iNQWXrK2F1Qei2"

# Initialize the client with automatic rate limit waiting enabled
client = tweepy.Client(bearer_token=BEARER_TOKEN, wait_on_rate_limit=True)

def fetch_tweets(hashtag, count=10):
    """
    Fetch recent tweets containing the given hashtag that are in English.
    This function handles rate limit errors (429) and pauses until limits reset.
    """
    # The query includes: the hashtag, exclusion of retweets, and the language filter (lang:en)
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
            # Get the reset time from response headers; default to 15 minutes if not provided.
            reset_timestamp = int(e.response.headers.get("x-rate-limit-reset", time.time() + 900))
            sleep_duration = max(reset_timestamp - int(time.time()), 60)
            print(f"Rate limit exceeded. Sleeping for {sleep_duration} seconds.")
            time.sleep(sleep_duration)
        except tweepy.TweepyException as e:
            print(f"An error occurred: {e}")
            return []

# Example usage:
tweets = fetch_tweets("stockmarketcrash", count=10)
for tweet in tweets:
    print(f"{tweet.created_at} | {tweet.text[:60]}...")
