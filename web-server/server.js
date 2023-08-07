var express = require("express");
var app = express();
var PORT = 3000;

//localhost:3000
/*
app.get("/", function(req, res){
    res.send(" Merhaba Express!!!!")
})
*/

app.get("/hakkimda", function(req, res){
    res.send("Hakkımda sayfası!!!");
})

app.use(express.static(__dirname + '/public'));

// console.log(__dirname);

app.listen(/*3000*/PORT, function(){
    console.log('Express server' + PORT + 'nolu portta çalışıyor....');
});