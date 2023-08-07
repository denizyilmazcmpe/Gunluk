var express = require("express");
var app = express();

app.get("/", function(req, res){
    res.send(" Merhaba Express!!!!")
})

app.get("/hakkimda", function(req, res){
    res.send("Hakkımda sayfası!!!");
})

app.listen(3000);