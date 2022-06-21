// Longest Word

// Write a function longestWord(sentence) that takes in a sentence string as an argument. The function should return the longest word in the sentence. If there is more than one "longest word", return the first of these instances.


// your code here
function longestWord(str){
    return str.split(' ').reduce((prev, current) => {
        if (prev.length >= current.length){
            return prev
        } else {
            return current
        }
    })
}



console.log(longestWord('where did everyone go')); // 'everyone'
console.log(longestWord('prefer simplicity over complexity')); // 'simplicity'
console.log(longestWord('')); // ''