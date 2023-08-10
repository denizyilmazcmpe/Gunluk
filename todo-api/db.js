var Sequelize = require("sequelize");
var sequelize = new Sequelize("todo_apii", "root", "root", {
    host : 'localhost',
    dialect : 'mysql'
});

var db = {};

// Todo modelini tanımlayın ve veritabanı tablosunun adını belirtin
db.Todo = sequelize.define('Todo', {
    description: {
        type: Sequelize.STRING,
        allowNull: false,
        validate: {
            len: [1, 250]
        }
    },
    completed: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
        defaultValue: false
    }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;
