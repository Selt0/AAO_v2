// Remove Last Vowel Recall

// Write a function removeLastVowel(word) that takes in a string and returns the string with its last vowel removed.

// your code here
function removeLastVowel(word){
    const vowels = 'aeiou'
    let lastIndex
   for (let i = word.length; i > 0; i--){
       if (vowels.includes(word[i])){
           lastIndex = i
           break;
       }
   }
   
   if(!lastIndex) return word
   return word.slice(0,lastIndex) + word.slice(lastIndex+1)
}


console.log(removeLastVowel('bootcamp')); // 'bootcmp'
console.log(removeLastVowel('better')); // 'bettr'
console.log(removeLastVowel('graph')); // 'grph'
console.log(removeLastVowel('thy')); // 'thy'