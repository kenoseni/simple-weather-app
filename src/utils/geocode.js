const request = require('request')

const geocode = (address, callback) => {
    const url = `https://api.mapbox.com/geocoding/v5/mapbox.places/${encodeURIComponent(address)}.json?access_token=pk.eyJ1Ijoia2Vub3NlbmkiLCJhIjoiY2s2a2tlZDJmMDR1bzNvbHNuZm9yaWU1cyJ9.h3y1GdgaNvwVMJFvQtgdEg&limit=1`

    request({url, json: true}, (error, res) => {
        if (error) {
            callback('Unable to connect to mapbox service', undefined)
        } else if (res.body.features == false) {
            callback('Unable to find location. Try another search', undefined)
        } else {
            const {center, place_name:placeName} = res.body.features[0]
            callback(undefined, {
                latitude: center[1],
                longitude: center[0],
                location: placeName
            })
        }
    })

}
module.exports =  geocode
