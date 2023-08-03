// Object
var account = {
    balance: 0
}

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
console.log(account);
para_yatir(account, 1000);
console.log(account);

console.log(hesap_ozeti(account));
para_yatir(account, 1000);
para_yatir(account, 20);para_cek(account, 1500);
console.log(hesap_ozeti(account));
