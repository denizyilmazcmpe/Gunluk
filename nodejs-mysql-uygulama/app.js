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

console.log(command);

// create
    // -n, -l, -e
// delete
    // -i
// list