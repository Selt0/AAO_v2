// Has Vowel

// Write a function hasVowel(str) that takes in a string. The function should return a boolean, true if the string contains at least one vowel, false otherwise.

// Vowels are the letters a, e, i, o, u.


let hasVowel = function(str) {
    let vowels = 'aeiou';

    for (let i = 0; i < str.length; i++) {
        let char = str[i];
        if (vowels.includes(char)) {
            return true;
        }
    }

    return false;
};

console.log(hasVowel('dog')); // true
console.log(hasVowel('conventional')); // true
console.log(hasVowel('rhythm')); // false