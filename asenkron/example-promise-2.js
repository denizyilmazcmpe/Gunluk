/*
function doWork(fail){
    return new Promise(function(resolve,reject){
        setTimeout(function(){
            // console.log('tamamlandi...');

            if(fail !== 'boolean'/*'undefined'*/ /*&& fail == true){
                reject("Hata!!!");
            } else {
                resolve("her şey başarili!!");
            }

        }, 1000)
        
        // resolve();
    })
}

doWork(/*true*//*).then(function(message){
    console.log(message);
  return doWork(true);  
//}).then(function(){
  //  return doWork();
}).then(function(){
    console.log('hepsi tamamlandi');
}).catch(function(error){
    console.log(error);
})
*/

function getLocation(){
    // return promise
    return new Promise(function(resolve,reject){
        resolve('istanbul')
    })
    // resolve ('istanbul');
}

function getWeather(location){
    return new Promise(function(resolve,reject){
        resolve(location + "'da hava sıcaklığı 34 derecedir!!!");
    })
    // return promise
    // resolve ('location' da hava bugün 56 derece');

}

// getLocation().then()
// return getWeather(location)
// then
// console.log(currentweather);


getLocation().then(function(location){
    return getWeather(location);
}).then(function(currentWeather){
    console.log(currentWeather);
})