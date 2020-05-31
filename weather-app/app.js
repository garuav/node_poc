// console.log('Starting');

// setTimeout(() => {
//     console.log('2 Second Timer');
// },2000);


// setTimeout(() => {
//     console.log('0 Second Timer');
// },0);


// console.log('Stopping');

const request = require('postman-request');
const geoCode = require('./utils/geocode');
// const url_weather_stack = "http://api.weatherstack.com/current?access_key=ec382bea358926841dadb2b2868b2974&query=12.9241,%2077.6092";

// request({url: url_weather_stack, json: true }, (error, response) => {
//     if(error) {
//         console.log('Unable to connect with weatherstack service !');
//     } else if(response.body.error) {
//         console.log('Unable to find Location !');
//     }
//      else {
//         const data = response.body.current;
//         console.log(`${data.weather_descriptions[0]} It is currently ${data.temperature} degrees out. It feels like ${data.feelslike} degrees out.`);
//     }
    
// });





geoCode.getGeoCode('BTM Stage 1', (error, response ) => {
    if(error) {
        console.log('error = ', error);
    } else {
        console.log('response = ',response);
    }
})

