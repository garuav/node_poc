const request = require('postman-request'); 


const getForecaste = (latitude, longitude, callback) => {
const url_weather_stack = `http://api.weatherstack.com/current?access_key=ec382bea358926841dadb2b2868b2974&query=${latitude},${longitude}`;
    request({url: url_weather_stack, json: true}, (error, response) => {
        if(error) {
            callback('Unable to connect with weather server !', undefined);
        } else if(response.body.error) {
            callback('Unable to find Location !', undefined);
        } else {
            callback(undefined, {
                temperature:  response.body.current.temperature,
                weather_descriptions: response.body.current.weather_descriptions,
                feelslike: response.body.current.feelslike
            })
        }
    })
}

module.exports = {
    getForecaste: getForecaste
}