var express = require("express");
var app = express();
var PORT = 3000;

/**************** Database Bağlantısı *******************/
var db = require("./db");
/******************************************************/

app.get("/todos", function(req, res){

    res.send("tüm todo elemanları listelenir...");

})


db.sequelize.sync().then(function(){
    console.log('Database bağlantısı başarılıdır');
    app.listen(PORT, function(){
        console.log('Express Listening on ' + PORT + "!");
    });
}).catch(function(err){
    console.error('Database bağlantısı sırasında hata oluştu:', err);
});

// Diğer kodlarınızı buraya ekleyebilirsiniz
