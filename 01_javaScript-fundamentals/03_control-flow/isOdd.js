// Is Odd

// Write a function isOdd that takes in a number as an argument and returns true if the number is odd and returns false otherwise.

// Write two versions of this function, one using conditionals (if) and one without using conditionals.

function isFive(num) {
    return num == 5
}

console.log(isFive(5)); // => true
console.log(isFive(13)); // => false

function isOdd(num){
    return num % 2 != 0
}

console.log(isOdd(5))
console.log(isOdd(2))
