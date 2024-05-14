function isStrongPassword(password, commonWords = []) {
 
    if (password.length === 0) {
      return false;
    }
  
    for (let i = 0; i < password.length - 3; i++) {
      if (password[i] === password[i + 1] && password[i] === password[i + 2] && password[i] === password[i + 3]) {
        return false;
      }
    }
  
    for (const word of commonWords) {
      if (password.toLowerCase().includes(word)) {
        return false;
      }
    }
  

    return true;
  }
  
  const commonWords = ['password', '123456', 'qwerty', 'admin', 'letmein'];
  const password = 'Antare@2024';
  
  if (isStrongPassword(password, commonWords)) {
    console.log('The password is strong.');
  } else {
    console.log('The password is weak.');
  }