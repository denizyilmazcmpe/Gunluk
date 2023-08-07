var request = require("request");
/*
function doWork(data, callback) {
    callback('callback...');
}

function doWorkPromise(data) {
    return new Promise(function(resolve, reject){
        // resolve("Her sey basarili bir sekilde calisti...");
        reject({
            error : "hata var..."
        })
    })
}

doWorkPromise('some data').then(function(response){
    console.log(response);
}, function(error){
    console.log(error);
})
*/

function getWeather(location) {
    return new Promise(function (resolve, reject) {
        
        var encodedLocation = encodeURIComponent(location);
        var url = "https://api.openweathermap.org/data/2.5/weather?q=" + location + ",tr&appid=5c1093a6f30891eda04dc3db21ea5e48&units=metric"

        if (!location) {
            return reject("Lokasyon bilgisi girilmedi..");
        }


        request({
            url: url,
            json: true,
        }, function (error, response, body) {

            if (error) {

                resolve("Hava durumu alinamadi!!")

            } else {

                resolve(body.name + "'da hava sicakligi : " + body.main.temp);

            }
        });
    })
}


getWeather('adana').then(function (currentWeather) {
    console.log(currentWeather);
}, function (error) {
    console.log(error);
})