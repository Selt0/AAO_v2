// Next Prime

// Write a function nextPrime that accepts a number as an argument. The function should return the nearest prime number that is greater than the given number.


// Your code here
function isPrime(num){
    for(let i = 2; i < num; i++){
        if (num % i == 0) return false
    }
    
    return true
}

function nextPrime(num){
    num += 1
    while (!isPrime(num)){
        num++
    }
    return num
}


console.log(nextPrime(2)); // 3
console.log(nextPrime(3)); // 5
console.log(nextPrime(7)); // 11
console.log(nextPrime(8)); // 11
console.log(nextPrime(20)); // 23
console.log(nextPrime(97)); // 101