var mongoose = require("mongoose");
var Shema = mongoose.Schema;

var userShema = new Shema({
    ad : String,
    soyad : String,
    dogumTarihi : String,
    email : String
});

var User = mongoose.model('User', userShema);

module.exports = User;