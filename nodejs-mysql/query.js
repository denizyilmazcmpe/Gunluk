var mysql = require('mysql');

var connection = mysql.createConnection({
  host: "127.0.0.1",
  user: "root",
  password: "root",
  database : "nodejs"
});

connection.connect(function(err) {
  if (err) throw err;
  console.log("MySQL'e başarılı bir şekilde bağlanıldı!!!");

  connection.query("SELECT * from personel", function(err, result){

    if(err) throw err;

    console.log("Result : " + result);
  })
});