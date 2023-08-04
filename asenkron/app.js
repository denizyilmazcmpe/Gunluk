// var request = require("request");
// var url = "https://api.openweathermap.org/data/2.5/weather?q=istanbul,tr&appid=5c1093a6f30891eda04dc3db21ea5e48&units=metric"

var argv = require("yargs")
    .option('location', {
        alias: 'l',
        demand: false,
        describe: 'Hava durumu için lokasyon bilgisi',
        type: 'string'
    })
    .help("help")
    .argv;

var weather = require("./weather");
var location = require("./location");

// yargs --location -l parametrelerini ayarlamak...
/*
weather(function(currentWeather){
    console.log(currentWeather);
});

location(function(location){

    if(!location){

        console.log("Lokasyon bilgisi alinamadi!!!")
        return;

    } else {

        console.log("Sehir : " + location.city);
        console.log("Long/Lat : " + location.loc);
        console.log("Ulke : " + location.country);
        
    }
})
*/

// if location verilmişse..
// weather(location, callback)
// else
// weather(location, callback)

if (typeof argv.l === 'string' && argv.l.length > 0) {

    console.log("Lokasyon bilgisi girildi...");

    weather(argv.l, function (currentWeather) {
        console.log(currentWeather);
    })

    // console.log("location...");
} else {

    console.log("Lokasyon bilgisi girilmedi... Tahmin ediliyor...");

    location(function (location) {

        if (!location) {

            console.log("Lokasyon bilgisi alinamadi!!!")
            return;

        } else {

            weather(location.city, function (currentWeather) {
                console.log(currentWeather);
            })

            // console.log("Sehir : " + location.city);
            // console.log("Long/Lat : " + location.loc);
            // console.log("Ulke : " + location.country);

        }
    })

}



/*
request({
    url : url,
    json : true,
}, function(error, response, body){

    if(error){
        
        console.log("Hava durumu alinamadi!!")
    
    } else {

        console.log(body.name + "'da hava sicakligi : " + body.main.temp);

    }
});
*/