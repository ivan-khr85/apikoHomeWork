const fetch = require('node-fetch');

const fetchGeocode = (apiKey, city) => (
  fetch(`https://maps.googleapis.com/maps/api/geocode/json?address=${city}&key=${apiKey}`)
    .then((response) => response.json())
    .then((json) => (
      json.results[0].geometry.location
    ))
);

module.exports = fetchGeocode;
