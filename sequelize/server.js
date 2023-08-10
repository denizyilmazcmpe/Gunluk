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
        username : "Sahil",
        email : "sahilyilmaz@gmail.com",
        phone : "5325425262",
        isActive : true
    }).then(
        row => {
            console.log(row.toJSON());
        })
    */
    /*************** find ***************/
    /*
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
    */
    /*************** destroy ***************/
    /*
    User.destroy({
        where : {
            id : 1
        }
    }).then(function(rowDeleted){

        if(rowDeleted === 0) {
            console.log('Böyle bir id bulunmamaktadır!!');
        } else {
            console.log('Silme işlemi başarılıdır');
        }

    })
    */
    /*************** update ***************/

    // Değiştirmek istenen kayıt bulunur
    // bulunan kayıt inst. değişiklik yapılır.

    User.findOne({
        where : {
            id : 22
        }
    }).then(function(user){
        if(user){
            user.update({
                email : "safideha@gmail.com"
            }).then(function(usr){
                console.log(usr.toJSON());
            })
        }
    })

})