const Sequelize = require("sequelize");
const sequelize = new Sequelize('todo_api', 'root', 'root', {
    host: 'localhost',
    dialect: 'mysql',
});

const User = sequelize.define('user', {
    username: {
        type: Sequelize.STRING,
        allowNull: false,
        validate: {
            len: [1, 10]
        },
        //defaultValue : "Safideha"
    },
    email: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true,
        validate: {
            isEmail: true
        }
    },
    phone: {
        type: Sequelize.STRING,
        allowNull: true,
        validate: {
            len: [1, 20]
        }
    },
    isActive: {
        type: Sequelize.BOOLEAN,
        defaultValue: true
    }
});

sequelize.sync({ force: false }).then(() => {
    console.log('Veritabanına baglanti saglandi...');

    User.create({
        username : "Sahil",
        email : "sahilyilmaz@gmail.com",
        phone : "5325425263",
        isActive : false
    }).then(
        row => {
            console.log(row.toJSON());
        })

})