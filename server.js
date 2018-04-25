const http = require('http');
const fs = require('fs');
require('dotenv').config();
const { fetchGeocode, fetchWeather, FToC } = require('./modules');
const apiKeyDARKSKY = process.env.DARKSKY;
const apiKeyGEOCODING = process.env.GEOCODING;
const argv = process.argv.slice(2);
const city = argv[0];


async function weather(city) {
  const geocode = await fetchGeocode(apiKeyGEOCODING, city);
  if (geocode === undefined) throw ('error city');
  const weatherCity = await fetchWeather(apiKeyDARKSKY, geocode.lat, geocode.lng);

  console.log(`Temperature now: ${FToC(weatherCity.currently.temperature)}`);



  fs.appendFile('weather.txt', `Temperature is now in ${city}: ${FToC(weatherCity.currently.temperature)}℃  \r\n`, (err) => {
    if (err) throw err;
    console.log('Saved in file!');
  });
}


weather(city)
  .catch(err => console.error(`error: ${err}`))