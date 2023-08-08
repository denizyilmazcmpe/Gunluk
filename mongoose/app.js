var mongoose = require("mongoose");
mongoose.connect('mongodb://127.0.0.1:27017/nodeMongoTest', { useNewUrlParser: true, useUnifiedTopology: true });

var db = mongoose.connection;

var User = require("./user");

db.on('error', console.error.bind(console, 'Bağlantı hatası:'));
db.once('open', function() {
    console.log("Veritabanına bağlantı sağlandı!!");
    
    var user_1 = new User({
        ad : "Deniz",
        soyad : "Yılmaz",
        dogumTarihi : "10/12/1995",
        email : "denizyilmazcmpe@gmail.com"
    });

    user_1.save().then( res => {
        console.log('kullanıcı kaydedildi!!');
    });
});
