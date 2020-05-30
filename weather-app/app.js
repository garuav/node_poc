// console.log('Starting');

// setTimeout(() => {
//     console.log('2 Second Timer');
// },2000);


// setTimeout(() => {
//     console.log('0 Second Timer');
// },0);


// console.log('Stopping');

const request = require('postman-request');

const url = "http://api.weatherstack.com/current?access_key=ec382bea358926841dadb2b2868b2974&query=12.9241,%2077.6092";

request({url: url, json: true }, (error, response) => {
    const data = response.body.current;
    console.log(`It is currently ${data.temperature} degrees out. It feels like ${data.feelslike} degrees out.`);
})