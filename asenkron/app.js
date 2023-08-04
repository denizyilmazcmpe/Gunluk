// var request = require("request");
// var url = "https://api.openweathermap.org/data/2.5/weather?q=istanbul,tr&appid=5c1093a6f30891eda04dc3db21ea5e48&units=metric"

var weather = require("./weather");
var location = require("./location");

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