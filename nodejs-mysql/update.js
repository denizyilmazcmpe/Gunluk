var mysql = require('mysql');

var connection = mysql.createConnection({
    host: "127.0.0.1",
    user: "root",
    password: "root",
    database: "nodejs"
});

connection.connect(function (err) {
    if (err) throw err;
    console.log("Bağlantı başarılı..");

    connection.query("UPDATE personel SET email = 'fitnetbiceryilmaz@gmail.com' WHERE id=3", function (err, result) {

        if (err) throw err;

        // console.log("Result : " + result);

       console.log(result.affectedRows + " kayıt güncellendi!!!");
    })
});