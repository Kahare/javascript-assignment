function generatePassword() {
    var length = 10; // length of the password
    var charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()-_=+{}[]|;:,.<>?";
    var retVal = "";
    for (var i = 0, n = charset.length; i < length; i++) {
       retVal += charset.charAt(Math.floor(Math.random() * n));
    }
    return retVal;
  }
  console.log(generatePassword());