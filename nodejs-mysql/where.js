var mysql = require('mysql');

var connection = mysql.createConnection({
  host: "127.0.0.1",
  user: "root",
  password: "root",
  database : "nodejs"
});

connection.connect(function(err) {
  if (err) throw err;
  console.log("Bağlantı başarılı..");

  connection.query("SELECT * from personel WHERE id >= 2", function(err, result){

    if(err) throw err;

    // console.log("Result : " + result);

    result.forEach(element => {

        console.log(element.ad + "-" + element.soyad);
        
    });
  })
});