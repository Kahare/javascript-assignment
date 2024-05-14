function generatePassword(firstName, lastName) {
   // Check if the input names are strings
   if (typeof firstName !== 'string' || typeof lastName !== 'string') {
       throw new Error('Both firstName and lastName must be strings');
   }

   // Get the first 3 characters of the first name and the last 3 characters of the last name
   const firstThreeChars = firstName.substring(0, 3);
   const lastThreeChars = lastName.substring(lastName.length - 3, lastName.length);

   // Combine the characters and add "@2024" to the end
   const generatedPassword = firstThreeChars + lastThreeChars + '@2024';

   return generatedPassword;
}

// Example usage
const userName = 'Anthony Kahare';
const password = generatePassword(...userName.split(' '));
console.log('Generated Password:', password);