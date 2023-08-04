// var request = require("request");
// var url = "https://api.openweathermap.org/data/2.5/weather?q=istanbul,tr&appid=5c1093a6f30891eda04dc3db21ea5e48&units=metric"

var weather = require("./weather");

weather(function(currentWeather){
    console.log(currentWeather);
});


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