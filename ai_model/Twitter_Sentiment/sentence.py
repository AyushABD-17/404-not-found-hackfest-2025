# tweet_analysis.py
import pandas as pd
import re
import numpy as np
from nltk.corpus import stopwords
import nltk
from sentence_transformers import SentenceTransformer
from sklearn.cluster import KMeans
from sklearn.feature_extraction.text import TfidfVectorizer
from sklearn.metrics.pairwise import cosine_similarity
from collections import Counter
import warnings

# Suppress warnings
warnings.filterwarnings('ignore')
nltk.download('stopwords', quiet=True)

def main():
    # Load and preprocess data
    df = pd.read_csv('ai_model/Twitter_Sentiment/tweets_sentiment.csv')
    tweets = df['Tweet'].tolist()
    stop_words = set(stopwords.words('english'))

    def preprocess(text):
        text = re.sub(r'http\S+|@\w+|#|[\W_]', ' ', str(text))
        text = text.lower().strip()
        tokens = text.split()
        tokens = [t for t in tokens if t not in stop_words and len(t) > 1]
        return ' '.join(tokens)

    processed_tweets = [preprocess(tweet) for tweet in tweets]

    # Generate embeddings
    model = SentenceTransformer('all-MiniLM-L6-v2')
    embeddings = model.encode(processed_tweets, convert_to_tensor=True)
    embeddings_np = embeddings.cpu().numpy()

    # Cluster tweets
    num_clusters = 5
    kmeans = KMeans(n_clusters=num_clusters, random_state=42)
    clusters = kmeans.fit_predict(embeddings_np)

    # Extract phrases and representative sentences
    cluster_keyphrases = []
    cluster_sentences = []

    for cluster_id in range(num_clusters):
        cluster_indices = [i for i, c in enumerate(clusters) if c == cluster_id]
        cluster_processed = [processed_tweets[i] for i in cluster_indices]
        cluster_original = [df['Tweet'].iloc[i] for i in cluster_indices]
        
        # Extract keyphrases
        tfidf = TfidfVectorizer(ngram_range=(1, 2), max_features=50)
        tfidf_matrix = tfidf.fit_transform(cluster_processed)
        feature_names = tfidf.get_feature_names_out()
        scores = np.asarray(tfidf_matrix.sum(axis=0)).ravel()
        sorted_indices = np.argsort(scores)[::-1]
        keyphrases = [feature_names[i] for i in sorted_indices[:10]]
        cluster_keyphrases.extend(keyphrases)
        
        # Find representative sentence
        cluster_embeddings = embeddings_np[cluster_indices]
        centroid = np.mean(cluster_embeddings, axis=0)
        similarities = cosine_similarity([centroid], cluster_embeddings)
        most_representative_idx = np.argmax(similarities)
        cluster_sentences.append(cluster_original[most_representative_idx])

    # Create DataFrames
    phrase_counter = Counter(cluster_keyphrases)
    top_phrases = phrase_counter.most_common(20)
    phrases_df = pd.DataFrame(top_phrases, columns=['Phrase', 'Frequency'])
    phrases_df.index.name = 'Rank'

    cluster_results = []
    for cluster_id in range(num_clusters):
        cluster_results.append({
            'Cluster': cluster_id + 1,
            'Top_Phrases': ", ".join([p for p, _ in phrase_counter.most_common(5)]),
            'Representative_Sentence': cluster_sentences[cluster_id]
        })
    
    clusters_df = pd.DataFrame(cluster_results)
    clusters_df.index.name = 'Cluster_Rank'

    # Combine results into a single dictionary for CSV output
    output_data = {
        'top_phrases': phrases_df,
        'cluster_analysis': clusters_df
    }

    # Save to CSV
    with pd.ExcelWriter('tweet_analysis_results.xlsx') as writer:
        phrases_df.to_excel(writer, sheet_name='Top_Phrases')
        clusters_df.to_excel(writer, sheet_name='Cluster_Analysis')

    print("Analysis complete. Results saved to 'tweet_analysis_results.xlsx'")

if __name__ == "__main__":
    main()