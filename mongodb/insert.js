var MongoDB = require("mongodb").MongoClient;

MongoDB.connect('mongodb://127.0.0.1:27017/nodeMongoTest').then(res => {
    console.log("Bağlantı Sağlandı!!!");

    var kitap = {
        // kitap_adi: "PHP Codeigniter",
        // basim_yili: 2017,
        // yazar: "Deniz Yılmaz",
        // yayin_evi: "Deniz Yayınları"
        
        kitap_adi: "Cerrah",
        basim_yili: 2008,
        yazar: "Tess Gerritsen",
        yayin_evi: "Bilinmiyor"
    }

    const db = res.db("nodeMongoTest");
    
    db.collection("kitap").insertOne(kitap).then(res2 => {
        console.log('Kaydetme işlemi başarılı');
    });
}).catch(error => {
    console.error("Bağlantı Sağlanamadı!!!", error);
});

