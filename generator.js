function generatePassword(firstName, lastName) {
   // Check if the input names are strings
   if (typeof firstName !== 'string' || typeof lastName !== 'string') {
       throw new Error('Both firstName and lastName must be strings');
   }


   const firstThreeChars = firstName.substring(0, 3);
   const lastThreeChars = lastName.substring(lastName.length - 3, lastName.length);

   const generatedPassword = firstThreeChars + lastThreeChars + '@2024';

   return generatedPassword;
}

const userName = 'Anthony Kahare';
const password = generatePassword(...userName.split(' '));
console.log('Generated Password:', password);