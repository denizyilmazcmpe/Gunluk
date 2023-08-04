var storage = require("node-persist");
storage.initSync();
var argv = require("yargs")
    .command('create', 'Yeni bir hesap olusturur..', function(yargs){
        yargs.options({
            name : {
                demand: true,
                alias : 'n',
                description : 'Hesap adi (Twitter, Facebook..)',
                type : 'string'
            },
            username : {
                demand: true,
                alias : 'u',
                description : 'Hesabin kullanici adi ya da sifresi.',
                type : 'string'
            },
            password : {
                demand: true,
                alias : 'p',
                description : 'Hesabiniza ait parola',
                type : 'string'
            }
        }).help('help');
    })
    .command('get', 'Hesap bilgilerini goruntulemeyi saglar..', function(yargs){
        yargs.options({
            name : {
                demand: true,
                alias : 'n',
                description : 'Hesap adi (Twitter, Facebook..)',
                type : 'string'
            }
        }).help('help');
    }).help('help')
    .argv;

    var command = argv._[0];

    if(command === 'create' && typeof argv.name !== 'undefined' && argv.name.length > 0
    && typeof argv.username !== 'undefined' && argv.username.length > 0 
    && typeof argv.password !== 'undefined' && argv.password.length > 0){
       
       var createdAccount = createAccount({
            name : argv.name,
            username : argv.username,
            password : argv.password
       });

       console.log("Hesap olusturuldu..");
       
        // console.log(argv.name);
    } else if(command === 'get' && typeof argv.name !== 'undefined' && argv.name.length > 0){

        var account =getAccount(argv.name);

        if(typeof account !== 'undefined'){
            console.log(account);
        }else {
            console.log("Aradiginiz kayit bulunamamistir!!");
        }

        console.log(account);
    } else {
        console.log("Lütfen gecerli bir komut giriniz..");
    }
    
    // console.log(argv);


   

// create
//      --name
//      --username
//      --password

// get
//      --name

/*

account.name : LinkedIn
account.username : User987&
account.password : Password987&


*/

// Array...

function createAccount(account) {

    // Onceki kayitlari al // getItemSync
    var accounts = storage.getItemSync("accounts");

    // Onceki kayıt yoksa... array olustur...
    if(typeof accounts === 'undefined'){
        accounts = [];
    }

    // account verisini array icerisine kaydet 
    accounts.push(account);

    //setItemSync ile kalıcı olarak kaydet
    storage.setItemSync("accounts", accounts);

    return account;

}

function getAccount(accountName) {
    
    // getItemSync ile veriyi getirmek... (Array)
    var accounts = storage.getItemSync("accounts");
    var matchedAccount;

    // forEach butun kayitlari dolasarak accountName bulunacak..
    accounts.forEach(function(account){
        if(account.name === accountName){
            matchedAccount = account;
        }
    })
    
    //return
    return matchedAccount;

}

/*
createAccount({
    name: 'Instagram',
    username : 'test@gmail.com',
    password : '12412412!'
});
*/

// var twitterAccount = getAccount("Twitter");

// console.log(twitterAccount);





// setItemSync(key, value)
// storage.setItemSync("name", "Safideha");

/* storage.setItemSync("settings", {
    status : true,
    password : 987,
    username : "Safideha",
    permission : "full-access"
})
*/

// getItemSync()
// var name = storage.getItemSync("name");
// console.log(name);

// console.log(storage.getItemSync("settings"));
