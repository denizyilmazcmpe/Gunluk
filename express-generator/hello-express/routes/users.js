var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  var id = req.query.id;
  // res.send('Göndermiş olduğunuz parametre: ' + id);
  // res.render("index", {title : "Kullanıcı Listesi"});
  res.redirect("http://google.com.tr");
});

module.exports = router;
