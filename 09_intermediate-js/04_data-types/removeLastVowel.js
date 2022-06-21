// Remove Last Vowel

// Write a function removeLastVowel(word) that takes in a string and returns the string with its last vowel removed.


// your code here
let lastVowelIndex = function(str) {
    let vowels = 'aeiou';

    for (let i = str.length - 1; i >= 0; i--) {
        let char = str[i];
        if (vowels.includes(char.toLowerCase())) {
            return i;
        }
    }
};


function removeLastVowel(word){
    if (lastVowelIndex(word) == undefined) return word
    
    let newWord =  word.split('')
    newWord.splice(lastVowelIndex(word), 1)
    return newWord.join('')
}

console.log(removeLastVowel('bootcamp')); // 'bootcmp'
console.log(removeLastVowel('better')); // 'bettr'
console.log(removeLastVowel('graph')); // 'grph'
console.log(removeLastVowel('thy')); // 'thy'