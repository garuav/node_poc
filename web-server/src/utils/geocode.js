const request = require('postman-request');
const getGeoCode = (address, callback) => {
    const url = `https://api.mapbox.com/geocoding/v5/mapbox.places/${encodeURI(address)}.json?access_token=pk.eyJ1IjoiZ2JnYXVyYXYiLCJhIjoiY2thdDE3ZzBsMDc5ZDMxcGhybHhmOWFwNSJ9.oxoqYs7miIRCxc3FSlYQJg&limit=1&type=locality`;
    request({url, json: true}, (error, {body} = {} ) => {
            if(error) {
                callback('Unable to connect with location services !', undefined);
            } else if(!body.features || body.features.length  === 0) {
                callback('Unable to fetch location. Try another location ', undefined);
            } else {
                callback(undefined, {
                    latitude: body.features[0].center[1],
                    longitude: body.features[0].center[0],
                    location_name: body.features[0].place_name
                });
            }
        })
    };

    module.exports = {
        getGeoCode: getGeoCode
    }