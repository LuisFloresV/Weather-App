const geoCode = require('./utils/geoCode')
const foreCast = require('./utils/foreCast')

geoCode(process.argv[2], (error, data) => {
    if (process.argv[2]) {
        if (error) {
            console.log('Error', error)
        }
        else {
            foreCast(data.latitude, data.longitude, (error, response) => {
                if (error) {
                    console.log('Error', error)
                }
                console.log(`${response.country}. ${response.name}`)
                console.log(`${response.description} It is currently ${response.temp} and feels like ${response.feels}`)
            })
        }
    }
    else {
        console.error('No location argument!')
    }
})

