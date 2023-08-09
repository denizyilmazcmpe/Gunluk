var mysql = require("mysql");
var argv = require("yargs")
.command('create', 'Yeni bir kayıt oluşturur...', function(yargs){
    yargs.options({
        name : {
            demand : true,
            alias : 'n',
            description : "Personelin adı...",
            type : 'string'
        },
        lastname : {
            demand : true,
            alias : 'l',
            description : "Personelin soyadı...",
            type : 'string'
        },
        email : {
            demand : true,
            alias : 'e',
            description : "Personelin e-posta adresi...",
            type : 'string'
        }
    }).help('help')
})
.command('delete', 'Kayıt silmenizi sağlar', function(yargs){
    yargs.options({
        id : {
            demand : true,
            alias : 'i',
            description : 'Personeli silmenizi sağlar',
            type : 'string'
        }
    }).help('help')
})
.command('list', 'Kayıtları listeler', function(yargs){
}).help('help').argv;

var command = argv._[0];

var connection =  mysql.createConnection({
    host : "127.0.0.1",
    user : "root",
    password : "root",
    database : "nodejs"
});

connection.connect(function(err){
    if(err) throw err;

    if(command == "create" && typeof argv.name !== "undefined" && typeof argv.lastname !== "undefined" &&typeof argv.email !== "undefined" && argv.name.length > 0 && argv.lastname.length > 0 && argv.email.length > 0){
    
        var sql = "INSERT INTO personel (ad, soyad, email) VALUES ('" + argv.name + "','" + argv.lastname + "','" + argv.email + "')";

        connection.query(sql, function(err, result){
            if(err) throw err;
            console.log('Kayıt başarılı bir şekilde eklendi!!!');
        })

    } else if(command == "delete" && typeof argv.id !== "undefined" && argv.id.length > 0){
        
        connection.query("DELETE FROM personel WHERE id = " + argv.id , function(err, result){
            if(err) throw err;
            console.log('Kayıt başarılı bir şekilde silindi!!!');
        })

    } else if(command == "list"){
    
        connection.query("SELECT * FROM personel", function(err, result){
            if(err) throw err;
            result.forEach(element => {
                console.log('Ad....: ' + element.ad );
                console.log('Soyad....: ' + element.soyad );
                console.log('E-posta....: ' + element.email );
                console.log('-----------------------------');
            });
        })

    }
})




// console.log(command);

// create
    // -n, -l, -e
// delete
    // -i
// list