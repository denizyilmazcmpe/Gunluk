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
    /*************** create ***************/
    /*
    User.create({
        username : "Fitnet",
        email : "fitnetyilmaz@gmail.com",
        phone : "5325425264",
        isActive : true
    }).then(
        row => {
            console.log(row.toJSON());
        })
    */
    /*************** Listeleme ***************/

    User.findAll({
        where : {
            //isActive : false
        },
        order : [
            ['id', 'DESC']
        ],
        raw : true
    }).then(function(users){
        console.log(users);
    }, function(){

    });

    User.findOne({
        where : {
            isActive : false
        }
    }).then(function(row){
        console.log(row.toJSON());
    });

    User.findByPk(1).then(function(row){
        console.log(row.toJSON());
    });

})