var express = require('express');
var router = express.Router();

var mongoose = require("mongoose");
var User = mongoose.model("User");

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.render("list");
});

router.get("/create", function(req, res, next){
  res.render("create");
})

router.post("/create", function(req, res, next){
  new User({
    ad : req.body.ad,
    soyad : req.body.soyad,
    dogumTarihi : req.body.dogumTarihi,
    email : req.body.email
  }).save(function(error, comment){
      res.redirect("/users");
  });
});

router.get("/delete/:id", function(req, res, next){
    res.send("Veri silindi..");
});

module.exports = router;





/*
var express = require('express');
var router = express.Router();

var mongoose = require("mongoose");
var User = mongoose.model("User");


router.get('/', function(req, res, next) {
  res.render("list");
});

router.get("/create", function(req, res, next){
  res.render("create");
})

router.post("/create", function(req, res, next){
    
  new User({
    ad : req.body.ad,
    soyad : req.body.soyad,
    dogumTarihi : req.body.dogumTarihi,
    email : req.body.email
  }).save(function(error, comment){
      res.redirect("/users");
  })

})

router.get("/delete/:id", function(req, res, next){
    res.send("Veri silindi..");
})

module.exports = router;
*/