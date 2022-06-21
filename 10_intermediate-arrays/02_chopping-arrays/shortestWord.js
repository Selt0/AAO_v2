// Shortest Word

// Write a function shortestWord that accepts a sentence as an argument. The function should return the shortest word in the sentence. If there is a tie, return the word that appears later in the sentence.


// Your code here
function shortestWord(str){
    return str.split(' ').reduce((prev, current) => {
        if (prev.length <= current.length){
            return prev
        } else {
            return current
        }
    })
}


console.log(shortestWord('what a wonderful life'));     // 'a'
console.log(shortestWord('the quick brown fox jumps')); // 'fox'
console.log(shortestWord('do what you enjoy'));         // 'do'