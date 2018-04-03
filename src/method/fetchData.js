const API = 'https://jsonplaceholder.typicode.com/';
const fetchData = (entity) => (
  fetch(API + entity).then(response => response.json())
);
export default fetchData;