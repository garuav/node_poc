const geoCode = require('./utils/geocode');
const forecaste = require('./utils/forecaste');

if(process.argv[2]) {
    geoCode.getGeoCode(process.argv[2], (error, {latitude, longitude, location_name} = {} ) => {
        if(error) {
           return  console.log('error = ', error);
        }
            // console.log('response = ',response);
            // console.log(`Location = ${response.location_name}. With latitude ${response.latitude} and longitude ${response.longitude}`);
    
            forecaste.getForecaste(latitude, longitude , (forecasteError, {weather_descriptions, temperature, feelslike} ={} ) => {
                if(error) {
                   return  console.log('forecasteError = ', forecasteError);
                } 
                    // console.log('forecasteResponse = ', forecasteResponse);
                    console.log(`${location_name} Weather is ${weather_descriptions[0]}. Temparature is ${temperature} degrees it feels like ${feelslike} degrees out.`);
    
                
            })
        
    })
} else {
    console.log('Please provide the location from the command line argument.')
}


