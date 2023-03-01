import axios from 'axios';

const searchImages = async (searchTerm) => {
  const response = await axios.get('https://api.unsplash.com/search/photos', {
    headers: {
      Authorization: 'Client-ID JMxjFCZdVkS7Julqor5B5wpVNO7E2IWgAXg8zUOYaqc',
    },
    params: {
      query: searchTerm,
    },
  });

  return response.data.results;
};

export default searchImages;
