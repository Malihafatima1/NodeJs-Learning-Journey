const https = require('https');

const options = {
  hostname: 'api.weather.gov',
  path: '/stations/KSFO/observations/latest',
  headers: {
    'User-Agent': 'Node.js App (youremail@example.com)',
    'Accept': 'application/ld+json'
  }
};

https.get(options, (res) => {
  let data = '';

  res.on('data', chunk => {
    data += chunk;
  });

  res.on('end', () => {
    try {
        const weather=JSON.parse(data);

        console.log(`Station: ${weather.stationName}`);
      console.log(`Time: ${weather.timestamp}`);
      console.log(`Weather: ${weather.textDescription}`);
      console.log(`Temperature: ${weather.temperature.value}°C`);
      console.log(`Humidity: ${weather.relativeHumidity.value.toFixed(1)}%`)
    }   catch(err){
        console.log('Error parsing JSON:', err);
    }
  });
}).on('error', (err) => {
  console.error(err);
});


