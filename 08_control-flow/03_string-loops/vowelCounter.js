// Vowel Counter

// Write a function, countVowels(word), that takes in a string word and returns the number of vowels in the word.

// Vowels are the letters "a", "e", "i", "o", "u".

function countVowels(word) {
    const vowels = 'aeiou'

    return word.split('').filter(letter => vowels.includes(letter)).length
};

console.log(countVowels("bootcamp")); // => 3
console.log(countVowels("apple")); // => 2
console.log(countVowels("pizza")); // => 2