// Hipsterfy

// Write a function hipsterfy(sentence) that takes in a sentence string and returns the sentence where every word is missing its last vowel.

// your code here
function removeLastVowel(word){
    let vowels = 'aeiou'
    let wordArr = word.split('')
    for (let i = word.length-1; i >= 0; i--){
        if (vowels.includes(word[i])){
            wordArr[i] = ''
            break
        }
    }
    return wordArr.join('')
}

function hipsterfy(sentence){
    return sentence.split(' ').map(word => removeLastVowel(word)).join(' ')
}


console.log(hipsterfy('When should everyone wake up?')); // 'Whn shold everyon wak p?'
console.log(hipsterfy('get ready for our bootcamp')); // 'gt redy fr or bootcmp'
console.log(hipsterfy('panthers are great animals')); // 'panthrs ar gret animls'