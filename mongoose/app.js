const mongoose = require("mongoose");
mongoose.connect('mongodb://127.0.0.1:27017/nodeMongoTest', { useNewUrlParser: true, useUnifiedTopology: true });

const db = mongoose.connection;

const User = require("./user");

db.on('error', console.error.bind(console, 'Bağlantı hatası:'));
db.once('open', async function () {
    try {
        console.log("Veritabanına bağlantı sağlandı!!");

/*
        // Kullanıcı ekleme işlemi
        const user_1 = new User({
            ad: "Deniz",
            soyad: "Yılmaz",
            dogumTarihi: "10/12/1995",
            email: "denizyilmazcmpe@gmail.com"
        });

        await user_1.save();
        console.log('Kullanıcı kaydedildi!!');
*/

        // Tüm kullanıcıları listeleme işlemi
        const allUsers = await User.find({});
        console.log(allUsers);

        // Kullanıcı silme işlemi
        const deletedUser = await User.findOneAndDelete({ _id: "64d2461426ade4d5bff4f84a" });
        if (deletedUser) {
            console.log('Kayıt silindi!!');
            const remainingUsers = await User.find({});
            console.log(remainingUsers);
        } else {
            console.log('Kayıt bulunamadı veya silinemedi.');
        }
    } catch (error) {
        console.error('İşlem hatası:', error);
    }
});
