const geoCode = require('./utils/geoCode')
const foreCast = require('./utils/foreCast')

geoCode(process.argv[2], (error, { longitude, latitude, location } = {}) => {
    if (process.argv[2]) {
        if (error) {
            console.log('Error', error)
        }
        else {
            foreCast(latitude, longitude, (error, { description, temp, feels }) => {
                if (error) {
                    console.log('Error', error)
                }
                console.log(`${location}`)
                console.log(`${description} It is currently ${temp} and feels like ${feels}`)
            })
        }
    }
    else {
        console.error('No location argument!')
    }
})

