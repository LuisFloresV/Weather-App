const geoCode = require('./utils/geoCode')
const foreCast = require('./utils/foreCast')


geoCode('Boston USA', (error, data) => {
    console.log('Error', error)
    console.log('Data', data)
})

foreCast('-75.7088', 44.1545, (error, data) => {
    console.log('Error', error)
    console.log('Data', data)
})