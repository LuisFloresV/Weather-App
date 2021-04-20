const request = require('request')

const foreCast = (x, y, cb) => {
    const URL = `http://api.weatherstack.com/forecast?access_key=01ffbef3f40e235f6d126936bf15c05f&query=${x},${y}`
    request({ url: URL, json: true }, (error, response) => {
        if (error) {
            cb('Unable to connect to location services', undefined)
        }
        else if (response.body.error) {
            cb('Unable to find location', undefined)
        }
        else {
            cb(undefined, {
                temp: response.body.current.temperature,
                feels: response.body.current.feelslike,
                description: response.body.current.weather_descriptions[0],
                name: response.body.location.name,
                country: response.body.location.country
            })
        }
    })
}

module.exports = foreCast