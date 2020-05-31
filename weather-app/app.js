// console.log('Starting');

// setTimeout(() => {
//     console.log('2 Second Timer');
// },2000);


// setTimeout(() => {
//     console.log('0 Second Timer');
// },0);


// console.log('Stopping');

const request = require('postman-request');

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



const getGeoCode = (address, callback) => {
const url_mapbox = `https://api.mapbox.com/geocoding/v5/mapbox.places/${encodeURI(address)}.json?access_token=pk.eyJ1IjoiZ2JnYXVyYXYiLCJhIjoiY2thdDE3ZzBsMDc5ZDMxcGhybHhmOWFwNSJ9.oxoqYs7miIRCxc3FSlYQJg&limit=1&type=locality`;
request({url: url_mapbox, json: true}, (error, response ) => {
        if(error) {
            callback('Unable to connect with location services !', undefined);
        } else if(!response.body.features || response.body.features.length  === 0) {
            callback('Unable to fetch location. Try another location ', undefined);
        } else {
            callback(undefined, {
                latitude: response.body.features[0].center[0],
                longitude: response.body.features[0].center[1],
                location_name: response.body.features[0].place_name
            });
        }
    })
};

getGeoCode('BTM Stage 1', (error, response ) => {
    if(error) {
        console.log('error = ', error);
    } else {
        console.log('response = ',response);
    }
})

