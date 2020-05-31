const request = require('postman-request');
const geoCode = require('./utils/geocode');
const forecaste = require('./utils/forecaste');


geoCode.getGeoCode('BTM Stage 1', (error, response ) => {
    if(error) {
        console.log('error = ', error);
    } else {
        // console.log('response = ',response);
        console.log(`Location = ${response.location_name}. With latitude ${response.latitude} and longitude ${response.longitude}`);

        forecaste.getForecaste(response.latitude, response.longitude , (forecasteError, forecasteResponse ) => {
            if(error) {
                console.log('forecasteError = ', forecasteError);
            } else {
                // console.log('forecasteResponse = ', forecasteResponse);
                console.log(`${forecasteResponse.weather_descriptions[0]}. Temparature is ${forecasteResponse.temperature} degrees it feels like ${forecasteResponse.feelslike} degrees out.`);

            }
        })
    }
})

