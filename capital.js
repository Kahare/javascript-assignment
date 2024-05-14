function capitalizeFirstLetter(str) {
    // Split the string into an array of words
    let words = str.split(" ");

    // Iterate through the array and capitalize the first letter of each word
    for (let i = 0; i < words.length; i++) {
        // Capitalize the first letter of the word and concatenate it with the rest of the word
        words[i] = words[i].charAt(0).toUpperCase() + words[i].slice(1);
    }

    // Join the array back into a string and return it
    return words.join(" ");
}

// Test the function
let inputString = "the quick brown fox jumped over the lazy dog";
let result = capitalizeFirstLetter(inputString);
console.log(result); // Output: Hello World
