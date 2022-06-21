// Vowel Counter

// Write a function, countVowels(word), that takes in a string word and returns the number of vowels in the word.
// Vowels are the letters "a", "e", "i", "o", "u".



function countVowels(word) {
  // your code here...
  let vowels = ['a','e','i','o','u']
  let count = 0
  for(let i = 0; i < word.length; i++){
      if (vowels.includes(word[i])) count++
  }
  return count
};

console.log(countVowels("bootcamp")); // => 3
console.log(countVowels("apple")); // => 2
console.log(countVowels("pizza")); // => 2