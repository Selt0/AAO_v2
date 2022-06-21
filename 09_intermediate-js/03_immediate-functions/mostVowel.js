// Most Vowels

// Write a function mostVowels that takes in a sentence string and returns the word of the sentence that contains the most vowels.


function mostVowels(sentence) {
    // your code here
    let longestVowel
    let count = 0
    sentence.split(' ').forEach(word => {
        if (vowelLength(word) > count){
            longestVowel = word
            count = vowelLength(word)
        }
    })
    
    return longestVowel
}

function vowelLength(word){
    let vowels = ['a','e','i','o','u']
    let count = 0
    word.split('').forEach(letter => {
        if (vowels.includes(letter)){
            count++
        }
    })
    return count
}

console.log(mostVowels("what a wonderful life")); // "wonderful"