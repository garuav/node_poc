// console.log('Starting');

// setTimeout(() => {
//     console.log('2 Second Timer');
// },2000);


// setTimeout(() => {
//     console.log('0 Second Timer');
// },0);


// console.log('Stopping');

const request = require('postman-request');

const url_weather_stack = "http://api.weatherstack.com/current?access_key=ec382bea358926841dadb2b2868b2974&query=12.9241,%2077.6092";

request({url: url_weather_stack, json: true }, (error, response) => {
    if(error) {
        console.log('Unable to connect with weatherstack service !');
    } else if(response.body.error) {
        console.log('Unable to find Location !');
    }
     else {
        const data = response.body.current;
        console.log(`${data.weather_descriptions[0]} It is currently ${data.temperature} degrees out. It feels like ${data.feelslike} degrees out.`);
    }
    
});


// mapbox request
const url_mapbox = 'https://api.mapbox.com/geocoding/v5/mapbox.places/BTM.json?access_token=pk.eyJ1IjoiZ2JnYXVyYXYiLCJhIjoiY2thdDE3ZzBsMDc5ZDMxcGhybHhmOWFwNSJ9.oxoqYs7miIRCxc3FSlYQJg&limit=1&type=locality';

request({url: url_mapbox, json: true}, (error,response) => {
    console.log('response = ',response);
    if(error) {
        console.log('Unable to connect with mapbox service !');
    } else if(!response.body.features || response.body.error) {
        console.log('Unable to fetch Location !')
    }
     else {
    const data = response.body;
    const coordinates = data.features[0].geometry.coordinates[1] + ','+ data.features[0].geometry.coordinates[0];
    console.log('data = ',data);
    console.log('coordinates = ',coordinates);
    }

});
