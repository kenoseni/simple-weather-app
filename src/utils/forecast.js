const request = require('request')

const forecast = (lat, long, callback) => {
    const url = `http://api.weatherstack.com/current?access_key=3131c06f594bb2960048144d64bf33b2&query=${lat, long}&units=f`
    request({url, json: true}, (error, res) => {
        if (error) {
            callback('Unable to connect to weather service')
        } else if (res.body.error) {
            callback('Unable to find location')
    
        }
        else {
            const {weather_descriptions:weatherDescription, temperature, feelslike} = res.body.current
            callback(undefined, `The weather is ${weatherDescription[0]}. It is currently ${temperature} fahrenheit but it feels like ${feelslike} fahrenheit!`)
        }
    })

}
module.exports = forecast
