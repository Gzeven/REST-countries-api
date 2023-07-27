let countryCache = {}; // Global cache to store fetched country data

export const fetchCountries = async () => {
  // Check if data is already cached, return from cache if available
  if (Object.keys(countryCache).length > 0) {
    return Object.values(countryCache);
  }

  try {
    const response = await fetch('https://restcountries.com/v3.1/all');
    const data = await response.json();

    // Store the fetched data in the cache
    data.forEach((country) => {
      countryCache[country.cca3] = country;
    });

    return data;
  } catch (error) {
    console.error('Error fetching countries:', error);
    return [];
  }
};
