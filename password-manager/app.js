var storage = require("node-persist");
var crypto = require("crypto-js");
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
            },
            masterPassword : {
                demand: true,
                alias : 'm',
                description : 'İslem yapabilmek icin gerekli olan sifre',
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
            },
            masterPassword : {
                demand: true,
                alias : 'm',
                description : 'İslem yapabilmek icin gerekli olan sifre',
                type : 'string'
            }
        }).help('help');
    }).help('help')
    .argv;

    var command = argv._[0];

    function getAccounts(masterPassword){

        // getItemSync accounts verisini cek..
        var encryptedAccounts = storage.getItemSync("accounts");
        var accounts = [];
    
        // decrypt
        if(typeof encryptedAccounts !== 'undefined'){
        var bytes = crypto.AES.decrypt(encryptedAccounts, masterPassword);
        accounts = JSON.parse(bytes.toString(crypto.enc.Utf8));
        }
    
    
        // return accounts array
    
        return accounts;
    
    }
    
    
    function saveAccounts(accounts, masterPassword){
        
        // encrypt accounts
        var encryptedAccounts = crypto.AES.encrypt(JSON.stringify(accounts), masterPassword);
    
        // setItemSyncs
        storage.setItemSync('accounts', encryptedAccounts.toString());
    
        // return accounts
        return accounts;
    
    }
    
    
    function createAccount(account, masterPassword) {
    
        // Onceki kayitlari al // getItemSync
        // var accounts = storage.getItemSync("accounts");
        // getAccounts()
        var accounts = getAccounts(masterPassword);
    
        // Onceki kayıt yoksa... array olustur...
       /* if(typeof accounts === 'undefined'){
            accounts = [];
        } */
    
        // account verisini array icerisine kaydet 
        accounts.push(account);
    
        //setItemSync ile kalıcı olarak kaydet
        // storage.setItemSync("accounts", accounts);
    
        // saveAccounts()
        saveAccounts(accounts, masterPassword);
    
        return account;
    
    }
    
    function getAccount(accountName, masterPassword) {
        
        // getItemSync ile veriyi getirmek... (Array)
        // var accounts = storage.getItemSync("accounts");
    
        // getAccounts()
        var accounts = getAccounts(masterPassword);
    
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
    

    if(command === 'create' && typeof argv.name !== 'undefined' && argv.name.length > 0
    && typeof argv.username !== 'undefined' && argv.username.length > 0 
    && typeof argv.password !== 'undefined' && argv.password.length > 0
    && typeof argv.masterPassword !== 'undefined' && argv.masterPassword.length > 0){
       
       try {
        var createdAccount = createAccount({
            name : argv.name,
            username : argv.username,
            password : argv.password
       }, argv.masterPassword);

       console.log("Hesap olusturuldu..");
       
       } catch (e) {
        console.log("Hesap olusturulamadi..");
       }
       
        // console.log(argv.name);
    } else if(command === 'get' && typeof argv.name !== 'undefined' && argv.masterPassword.length > 0 && typeof argv.masterPassword !== 'undefined' && argv.name.length > 0){

        try {
            var account =getAccount(argv.name, argv.masterPassword);

            if(typeof account !== 'undefined'){
            console.log(account);
            }else {
            console.log("Aradiginiz kayit bulunamamistir!!");
            }

            // console.log(account);
        } catch(e){
            console.log("Hesap getirilemedi..")  
        }
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

