var storage = require("node-persist");
storage.initSync();

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

var twitterAccount = getAccount("Twitter");

console.log(twitterAccount);





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
