function isStrongPassword(password, commonWords = []) {
    // Check if password is blank
    if (password.length === 0) {
      return false;
    }
  
    // Check for repeated characters
    for (let i = 0; i < password.length - 3; i++) {
      if (password[i] === password[i + 1] && password[i] === password[i + 2] && password[i] === password[i + 3]) {
        return false;
      }
    }
  
    // Check for common words
    for (const word of commonWords) {
      if (password.toLowerCase().includes(word)) {
        return false;
      }
    }
  
    // If all checks pass, return true
    return true;
  }
  
  // Example usage:
  const commonWords = ['password', '123456', 'qwerty', 'admin', 'letmein'];
  const password = 'Antare@2024';
  
  if (isStrongPassword(password, commonWords)) {
    console.log('The password is strong.');
  } else {
    console.log('The password is weak.');
  }