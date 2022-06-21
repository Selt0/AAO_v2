// Consonant Cancel

// Write a function consonantCancel that takes in a sentence and returns a new sentence where every word begins with it's first vowel.

function consonantCancel(sentence) {
    // your code here
    return sentence.split(' ').map(word => word.slice(findVowelIndex(word))).join(' ')
}

function findVowelIndex(word){
    let vowels = 'aeiou'
    for (let i = 0; i < word.length; i++){
        if (vowels.includes(word[i])) return i
    }
}
console.log(consonantCancel("down the rabbit hole")); // "own e abbit ole"
console.log(consonantCancel("writing code is challenging")); // "iting ode is allenging"