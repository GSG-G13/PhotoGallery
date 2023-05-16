import API_KEY from './token';

const imageSearch = (query, type) => {
  // const key = process.env.API_KEY;
  const imageUrl = `https://pixabay.com/api/?key=${API_KEY}&q=${encodeURIComponent(
    query
  )}&image_type=${type}&per_page=30`;
  fetch(imageUrl)
    .then((response) => {
      console.log(response, 'response');
      if (!response.status === 200) {
        console.log(`Error with the request! ${response.status}`);
        return;
      }
      return response.json();
    })
    .catch((error) => {
      console.log(error);
    });
};
export default imageSearch;
