var request = require("request");
var url = "https://api.openweathermap.org/data/2.5/weather?q=istanbul,tr&appid=5c1093a6f30891eda04dc3db21ea5e48&units=metric"

module.exports = function(callback){

    request({
        url : url,
        json : true,
    }, function(error, response, body){
    
        if(error){
            
            callback("Hava durumu alinamadi!!")
        
        } else {
    
            callback(body.name + "'da hava sicakligi : " + body.main.temp);
    
        }
    });

    // callback("Hava durumu alindi!!!");
}