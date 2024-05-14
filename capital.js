function capitalizeFirstLetter(str) {

    let words = str.split(" ");


    for (let i = 0; i < words.length; i++) {

        words[i] = words[i].charAt(0).toUpperCase() + words[i].slice(1);
    }


    return words.join(" ");
}


let inputString = "the quick brown fox jumped over the lazy dog";
let result = capitalizeFirstLetter(inputString);
console.log(result); 
