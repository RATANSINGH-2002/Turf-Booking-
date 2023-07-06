import pandas as pd
from sklearn.feature_extraction.text import CountVectorizer
from sklearn.metrics.pairwise import cosine_similarity

# Define search queries
searches = ['python tutorial', 'machine learning course', 'data visualization tools']

# Load website data
website_data = pd.read_csv('website_data.csv')

# Initialize count vectorizer
count_vectorizer = CountVectorizer(stop_words='english')

# Convert website data into document-term matrix
document_term_matrix = count_vectorizer.fit_transform(website_data['content'])

# Compute cosine similarity between search queries and website content
search_query_matrix = count_vectorizer.transform(searches)
cosine_similarities = cosine_similarity(search_query_matrix, document_term_matrix)

# Generate recommendations based on cosine similarities
recommendations = []
for i, search in enumerate(searches):
    sorted_indices = cosine_similarities[i].argsort()[::-1]
    for idx in sorted_indices:
        if website_data.iloc[idx]['url'] not in recommendations:
            recommendations.append(website_data.iloc[idx]['url'])
            break

# Print recommendations
print("Recommended websites based on recent searches:")
for website in recommendations:
    print("- {}".format(website))
