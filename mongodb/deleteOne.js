var MongoDB = require("mongodb").MongoClient;

MongoDB.connect('mongodb://127.0.0.1:27017/nodeMongoTest').then(res => {
    console.log("Bağlantı Sağlandı!!!");
    const db = res.db("nodeMongoTest");
    db.collection("kitap").find({basim_yili : 2017}).toArray().then(res2 => {

        console.log(res2);
    })
    
    db.collection("kitap").deleteOne({kitap_adi : "Cerrah"}).then(res3 => {

        console.log("Kayıt Silinmiştir!!");
    })
  
}).catch(error => {
    console.error("Bağlantı Sağlanamadı!!!", error);
});
