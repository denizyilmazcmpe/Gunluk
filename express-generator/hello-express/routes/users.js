var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  var id = req.query.id;
  // res.send('Göndermiş olduğunuz parametre: ' + id);
  // res.render("index", {title : "Kullanıcı Listesi"});
  res.redirect("http://google.com.tr");
});

router.post("/create", function(req, res, next){
  res.send("Kayıt için kullanılacak route bölümü!");
})
router.put("/create", function(req, res, next){
  res.send("Update için kullanılacak method");
})
router.delete("/create", function(req, res, next){
  res.send("Silme işlemi için kullanılacak metot");
})

module.exports = router;
