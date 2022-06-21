// Has Three Vowels

// Write a function hasThreeVowels that accepts a string as an argument. The function should return a boolean indicating whether or not the string contains at least three different vowels.


function hasThreeVowels(string){
    const vowels = 'aeiou'
    let vowelsInWord = ''
    let count = 0

    for(let i = 0; i < string.length; i++){
        if (vowels.includes(string[i]) && !vowelsInWord.includes(string[i])){
            count++
            vowelsInWord += string[i]
        }

        if (count === 3) return true
    }

    return false
}


console.log(hasThreeVowels('delicious'));       //  true
console.log(hasThreeVowels('bootcamp prep'));   //  true
console.log(hasThreeVowels('bootcamp'));        //  false
console.log(hasThreeVowels('dog'));             //  false
console.log(hasThreeVowels('go home'));         //  false