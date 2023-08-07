var request = require("request");

module.exports = function(location /*, callback*/){
    
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

                reject("Hava durumu alinamadi!!")

            } else {

                resolve(body.name + "'da hava sicakligi : " + body.main.temp);

            }
        });
    })
    
    /*
    // test.com/a%20maddesi
    // test.com/a maddesi.
    
    var encodedLocation =  encodeURIComponent(location);

    var url = "https://api.openweathermap.org/data/2.5/weather?q=" + location + ",tr&appid=5c1093a6f30891eda04dc3db21ea5e48&units=metric"

    if(!location){
        return callback("Lokasyon bilgisi girilmedi..");
    }


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
    */
}