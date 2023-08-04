var argv = require("yargs")
    .command('hello','Kullanicilari Selamlar!!!', function(yargs){
        yargs.options({
            name : {
                demand : true,
                description : 'Adinizi gireceginiz argumandir!!',
                alias: 'n',
                type: 'string'
            },
            lastname : {
                demand : true,
                description : 'Soyadinizi gireceginiz argumandir!!',
                alias : 'l',
                type: 'string'
            }
        }).help('help');
    })
    .command('command', 'aciklama..', function(yargs){   
    })
    .help("help")
    .argv;
var command = argv._[0];

// console.log(command);

/*
console.log(argv._);
console.log(argv.name);
console.log(argv.surname);
*/

if (command === 'hello' && typeof argv.name !== 'undefined' && typeof argv.lastname !== 'undefined') {
    console.log('Hello ' + argv.name + ' ' + argv.lastname + '!');
} else if (command === "hello" && typeof argv.name !== 'undefined') {
    console.log('Hello ' + argv.name + '!');
} else if (command === "hello") {
    console.log("Hello World");
}
