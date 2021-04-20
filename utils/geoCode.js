const request = require('request')

const geoCode = (address, cb) => {
    const URL = `https://api.mapbox.com/geocoding/v5/mapbox.places/${encodeURIComponent(address)}.json?access_token=pk.eyJ1IjoibHVpc2Zsb3Jlczk4IiwiYSI6ImNrbnA5cGduZTAwdmwydW13aHZrMTd4bHkifQ.z2WP5gPfMke994rc2UJ-pQ`
    request({ url: URL, json: true }, (error, response) => {
        if (error) {
            cb('Unable to connect to location services', undefined)
        } else if (response.body.features.length === 0) {
            cb('Unable to find location. Try another search', undefined)
        } else {
            cb(undefined, {
                longitude: response.body.features[0].center[0],
                latitude: response.body.features[0].center[1],
                location: response.body.features[0].place_name
            })
        }
    })
}

module.exports = geoCode