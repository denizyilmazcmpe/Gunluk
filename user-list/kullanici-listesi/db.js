var mongoose = require("mongoose");
mongoose.connect('mongodb://127.0.0.1:27017/user-list', { useNewUrlParser: true, useUnifiedTopology: true });

var Schema = mongoose.Schema;

var userSchema = new Schema
({
    ad : String,
    soyad : String,
    dogumTarihi : String,
    email : String
});

mongoose.model("DenizYilmaz", userSchema);

module.exports = mongoose;
