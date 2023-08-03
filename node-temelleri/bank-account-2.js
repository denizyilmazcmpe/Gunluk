var accounts = [];

// Account
// balance
// username


function hesap_olustur(account){
    accounts.push(account);
    return account;
}

function hesap_getir(username){
    var matchedAccount;

    accounts.forEach(function(account){
        if(account.username === username){
            matchedAccount = account;
        }
    })

    return matchedAccount;
}

// Object
// var account = {
//     balance: 0
// }

//para_yatir(account, miktar)
function para_yatir(account, miktar){
    account.balance += miktar;
}


//para_cek(account, miktar)
function para_cek (account,miktar){
    account.balance -= miktar;
}

//hesap_ozeti(account)
function hesap_ozeti (account){
    return account.balance;
}
// console.log(account);
// para_yatir(account, 1000);
// console.log(account);

// console.log(hesap_ozeti(account));
// para_yatir(account, 1000);
// para_yatir(account, 20);para_cek(account, 1500);
// console.log(hesap_ozeti(account));

var denizYilmaz = hesap_olustur({
    username : "Deniz",
    balance : 0
});
var sahilYilmaz = hesap_olustur({
    username : "Sahil",
    balance : 50000
});

console.log(denizYilmaz);
console.log(accounts);
console.log(hesap_getir("Deniz"));

para_yatir(hesap_getir("Deniz"), 2000);

console.log(accounts);

para_cek(hesap_getir("Sahil"), 5000);

console.log(accounts);
