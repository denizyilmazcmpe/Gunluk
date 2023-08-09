var mysql = require("mysql");

var connection = mysql.createConnection({
    host : "localhost",
    user : "root",
    password : "root",
    database : "nodejs"
});

connection.connect(function(err){

    if (err) throw err;
    console.log('Bağlantı başarılı...');

    var sql = "INSERT INTO personel (id ,ad, soyad, email) VALUES ('3', 'Fitnet', 'Yılmaz', 'fitnetyilmaz@gmail.com')";

    connection.query(sql, function(err, result){

        if(err) throw err;
        console.log('Kayıt başarılı bir şekilde eklendi!!');
    })
})