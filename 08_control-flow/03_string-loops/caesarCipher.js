// Caesar Cipher

// Write a method caesarCipher that takes in a string and a number. The function should return a new string where every character of the original is shifted num characters in the alphabet.


function caesarCipher(string, num) {
    const alphabet = "abcdefghijklmnopqrstuvwxyz";
    let newString = "";

    for (let i = 0; i < string.length; i++) {
        let char = string[i];
        let oldIdx = alphabet.indexOf(char);
        let newIdx = oldIdx + num;
        let newChar = alphabet[newIdx % alphabet.length];
        newString += newChar;
    }
    return newString;
}

console.log(caesarCipher("apple", 1)); // "bqqmf"
console.log(caesarCipher("bootcamp", 2)); // "dqqvecor"
console.log(caesarCipher("zebra", 4)); // "difve"