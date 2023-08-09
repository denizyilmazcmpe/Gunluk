var mysql = require('mysql');

var con = mysql.createConnection({
  host: "127.0.0.1",
  user: "root",
  password: "root",
  database : "nodejs"
});

con.connect(function(err) {
  if (err) throw err;
  console.log("MySQL'e başarılı bir şekilde bağlanıldı!!!");
});