var MongoDB = require("mongodb").MongoClient;

MongoDB.connect('mongodb://127.0.0.1:27017/nodeMongoTest').then(res => {
    console.log("Bağlantı Sağlandı!!!");
}).catch(error => {
    console.error("Bağlantı Sağlanamadı!!!", error);
});
