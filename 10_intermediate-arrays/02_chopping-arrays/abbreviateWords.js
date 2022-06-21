// Abbreviate Words

// Write a function abbreviateWords(sentence) that takes in a sentence string. The function should return a new sentence where words that are longer than 4 characters have their vowels removed. Hint: Consider creating a helper function to remove all vowels in a string.


// your code here
function vowelRemover(word){
    let vowels = 'aeiou'
    let wordArr = word.split('')
    
    return wordArr.map(letter =>{
        if (vowels.includes(letter)){
            return ''
        } else {
            return letter
        }
    }).join('')
}

function abbreviateWords(str){
    let strArr = str.split(' ')
    return strArr.map(word => {
        return word.length > 4 ?  vowelRemover(word) :  word
    }).join(' ')
}


console.log(abbreviateWords('what a wonderful place to live')); // what a wndrfl plc to live
console.log(abbreviateWords('she sends an excellent message ')); // she snds an xcllnt mssg