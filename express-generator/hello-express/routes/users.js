var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  var id = req.query.id;
  res.send('Göndermiş olduğunuz parametre: ' + id);
});

module.exports = router;
