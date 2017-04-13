var CryptoJS = require("crypto-js");
 
var key ='ACS_Key1234#';
var key_hashed = CryptoJS.SHA256(key);
//console.log('key hashed',key_hashed.toString());

var encrypted = '2ely+gZkkhDkB1KAWWvfXtaEsTOECtnBK/TjhT35sJo=';

var encrypted_BIN = CryptoJS.enc.Base64.parse(encrypted);
//console.log('encrypted bin: ',encrypted_BIN);

//var encrypted_decoded = "Hello World";
var iv = encrypted_BIN.toString().substring(0,32);
//console.log('iv string',iv);
var iv_hex = CryptoJS.enc.Hex.parse(iv);
console.log('iv',iv);

var data = encrypted_BIN.toString().substring(32);
console.log('data string',data);
var data = CryptoJS.enc.Hex.parse(data);
//console.log('data',data);

var key_HEX_str = key_hashed.toString();
// Encrypt 
//var ciphertext = CryptoJS.AES.encrypt('my message', 'secret key 123');
 
// Decrypt 
//var bytes  = CryptoJS.AES.decrypt(ciphertext.toString(), 'secret key 123');
var bytes  = CryptoJS.AES.decrypt(CryptoJS.enc.Base64.stringify(data), key_hashed,{iv:iv_hex});

console.log('...Bytes....................');
console.log(bytes);
var text = bytes.toString(CryptoJS.enc.Utf8);
console.log('-----------------text----------');
console.log(text);