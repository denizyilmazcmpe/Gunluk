const mongoose = require("mongoose");

mongoose.connect('mongodb://127.0.0.1:27017/user-list', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => {
  console.log("MongoDB bağlantısı başarılı.");
})
.catch((err) => {
  console.error("MongoDB bağlantısı sırasında hata oluştu:", err);
});

var Schema = mongoose.Schema;

var userSchema = new Schema ({
    ad : String,
    soyad : String,
    dogumTarihi: String,
    email: String
});

// Sadece model daha önce tanımlanmamışsa tanımla
if (mongoose.modelNames().indexOf("User") === -1) {
  mongoose.model("User", userSchema);
}

module.exports = mongoose;







/*
const mongoose = require("mongoose");

mongoose.connect('mongodb://127.0.0.1:27017/user-list', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => {
  console.log("MongoDB bağlantısı başarılı.");
})
.catch((err) => {
  console.error("MongoDB bağlantısı sırasında hata oluştu:", err);
});

var Schema = mongoose.Schema;

var userSchema = new Schema ({
    ad : String,
    soyad : String,
    dogumTarihi: String,
    email: String
});

mongoose.model("User", userSchema);

module.exports = mongoose;
*/