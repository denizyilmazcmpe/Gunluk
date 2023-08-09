const Sequelize = require("sequelize");
const sequelize = new Sequelize('todo_api', 'root', 'root',{
    host : 'localhost',
    dialect : 'mysql',
});

sequelize.sync().then(() => {
    console.log('Veritabanına baglanti saglandi...');
})