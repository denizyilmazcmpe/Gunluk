const Sequelize = require("sequelize");
const sequelize = new Sequelize('todo_api', 'root', 'root',{
    host : 'localhost',
    dialect : 'mysql',
});

const User = sequelize.define('user', {
    username : Sequelize.STRING,
    email : Sequelize.STRING
});

sequelize.sync().then(() => {
    console.log('Veritabanına baglanti saglandi...');
})