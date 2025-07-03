const yelpApiKey = 'YOUR_YELP_API_KEY_HERE'; // <-- Replace with your actual Yelp API key
const yelpBaseUrl = 'https://api.yelp.com/v3/businesses/search';

const search = async (term, location, sortBy) => {
  const url = `${yelpBaseUrl}?term=${encodeURIComponent(term)}&location=${encodeURIComponent(location)}&sort_by=${encodeURIComponent(sortBy)}`;

  try {
    const response = await fetch(url, {
      headers: {
        Authorization: `Bearer ${yelpApiKey}`,
      },
    });

    if (!response.ok) {
      throw new Error(`Request failed with status ${response.status}`);
    }

    const jsonResponse = await response.json();

    if (!jsonResponse.businesses) {
      return [];
    }

    // Extract only the data we want for each business
    return jsonResponse.businesses.map(business => ({
      id: business.id,
      name: business.name,
      imageSrc: business.image_url,
      address: business.location.address1,
      city: business.location.city,
      state: business.location.state,
      zipCode: business.location.zip_code,
      category: business.categories[0]?.title || '',
      rating: business.rating,
      reviewCount: business.review_count,
      url: business.url,
    }));
  } catch (error) {
    console.error('Error fetching Yelp data:', error);
    return [];
  }
};

const Yelp = { search };

export default Yelp;
