const fetch = require('node-fetch');

const fetchWeather = (apiKey, lat, lng) => (
  fetch(`https://api.darksky.net/forecast/${apiKey}/${lat},${lng}`)
    .then((response) => response.json())
);

module.exports = fetchWeather;