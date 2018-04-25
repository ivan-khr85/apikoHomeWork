const fetch = require('node-fetch');

const fetchGeocode = (apiKey, city) => (
  fetch(`https://maps.googleapis.com/maps/api/geocode/json?address=${city}&key=${apiKey}`)
    .then((response) => response.json())
    .then((json) => {
      if (json.status === 'ZERO_RESULTS') throw ('city not found');
      return (
        json.results[0].geometry.location
      )
    })
);

module.exports = fetchGeocode;
