// Hipsterfy Recall

// Write a function hipsterfy(sentence) that takes in a sentence string and returns the sentence where every word is missing its last vowel.

// your code here
function removeLastVowel(word){
    const vowels = 'aeiou'
    let lastIndex
   for (let i = word.length; i >= 0; i--){
       if (vowels.includes(word[i])){
           lastIndex = i
           if(lastIndex === 0) return word.slice(1)
           break;
       }
   }
   
   if(!lastIndex) return word
   
   return word.slice(0,lastIndex) + word.slice(lastIndex+1)
}

function hipsterfy(sentence) {
    return sentence.split(' ').map(word => removeLastVowel(word)).join(' ')
}


console.log(hipsterfy('When should everyone wake up?')); // 'Whn shold everyon wak p?'
console.log(hipsterfy('get ready for our bootcamp')); // 'gt redy fr or bootcmp'
console.log(hipsterfy('panthers are great animals')); // 'panthrs ar gret animls'