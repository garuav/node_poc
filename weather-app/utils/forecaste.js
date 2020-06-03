const request = require('postman-request'); 


const getForecaste = (latitude, longitude, callback) => {
const url = `http://api.weatherstack.com/current?access_key=ec382bea358926841dadb2b2868b2974&query=${latitude},${longitude}`;
    request({url, json: true}, (error, {body}) => {
        if(error) {
            callback('Unable to connect with weather server !', undefined);
        } else if(body.error) {
            callback('Unable to find Location !', undefined);
        } else {
            callback(undefined, {
                temperature:  body.current.temperature,
                weather_descriptions: body.current.weather_descriptions,
                feelslike: body.current.feelslike
            })
        }
    })
}

module.exports = {
    getForecaste: getForecaste
}