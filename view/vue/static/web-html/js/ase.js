// 加密数据函数 工具crypto.js 文件工具
function aesEncrypt(word){
  var key = CryptoJS.enc.Utf8.parse("BGxdEUOZkXka4HSj");
  var srcs = CryptoJS.enc.Utf8.parse(word);
  var encrypted = CryptoJS.AES.encrypt(srcs, key, {mode:CryptoJS.mode.ECB,padding: CryptoJS.pad.Pkcs7});
  return encrypted.toString();
}
function aesDecrypt(word){
  var key = CryptoJS.enc.Utf8.parse("BGxdEUOZkXka4HSj");
  var decrypt = CryptoJS.AES.decrypt(word, key, {mode:CryptoJS.mode.ECB,padding: CryptoJS.pad.Pkcs7});
  return CryptoJS.enc.Utf8.stringify(decrypt).toString();
}