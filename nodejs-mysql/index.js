const express = require("express");
const mysql = require("mysql");
const app = express();
const util = require("util");

const connection = mysql.createConnection({
    host: "127.0.0.1",
    user: "root",
    password: "",
    database: "nodejs"
});

const query = util.promisify(connection.query).bind(connection);

app.get('/', async (req, res) => {
    try {
        await query('SELECT 1');
        res.send('Hey there! Database connection successful!');
    } catch (err) {
        console.error('Database connection error:', err.message);
        res.status(500).send('An error occurred while connecting to the database.');
    }
});

connection.connect(function(err){
    if(err) {
        console.error('Database connection error:', err.message);
        return;
    }
    console.log('Database connected!');
    
    app.listen(3000, function(){
        console.log('App listening on port 3000');
    });
});
