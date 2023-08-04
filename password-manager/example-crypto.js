var crypto = require("crypto-js");

var message = "Sifrelenecek olan mesaj...";
var key = "123abc!";

// Encrypt
var sifreliMesaj = crypto.AES.encrypt(message, key);
console.log("Sifreli Metin: " + sifreliMesaj);


// Decrypt
var bytes = crypto.AES.decrypt(sifreliMesaj, key);
var decryptedMessage = bytes.toString(crypto.enc.Utf8);

console.log("Orjinal Metin: " + decryptedMessage);