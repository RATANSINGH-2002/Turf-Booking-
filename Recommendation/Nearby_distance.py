import pandas as pd
from geopy.distance import geodesic

# example data
websites_df = pd.DataFrame({
    'Website': ['www.example.com', 'www.example2.com', 'www.example3.com', 'www.example4.com'],
    'Latitude': [37.7749, 37.7749, 37.7749, 40.7128],
    'Longitude': [-122.4194, -122.4194, -122.4194, -74.0060]
})

# user's location
user_location = (37.7749, -122.4194)

# function to calculate distance between two coordinates using the geodesic formula
def calculate_distance(user_location, website_location):
    return geodesic(user_location, website_location).miles

# calculate distances between user and each website
websites_df['Distance'] = websites_df.apply(lambda row: calculate_distance(user_location, (row['Latitude'], row['Longitude'])), axis=1)

# sort websites by distance and return top 3 recommendations
recommendations = websites_df.sort_values('Distance').head(3)['Website'].tolist()

print('Recommended websites:', recommendations)