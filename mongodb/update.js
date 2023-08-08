
var MongoClient = require("mongodb").MongoClient;

MongoClient.connect('mongodb://127.0.0.1:27017/nodeMongoTest')
    .then(client => {
        console.log("Bağlantı Sağlandı!!!");

        var newData = {
            $set: {
                kitap_adi: "PHP Codeigniter Çerçevesi",
                basim_yili: 2017,
                yazar: "Deniz Yılmaz",
                yayin_evi: "Deniz Yayınları Dağıtımcılık"
            }
        };

        const db = client.db("nodeMongoTest");
        db.collection("kitap").updateOne({ yayin_evi: "Deniz Yayınları" }, newData)
            .then(res2 => {
                console.log('updated');
                return db.collection("kitap").find({}).toArray();
            })
            .then(rows => {
                console.log(rows);
            })
            .catch(error => {
                console.error("Güncelleme veya sorgu hatası:", error);
            })
            .finally(() => {
                client.close();
            });
    })
    .catch(error => {
        console.error("Bağlantı Sağlanamadı!!!", error);
    });

