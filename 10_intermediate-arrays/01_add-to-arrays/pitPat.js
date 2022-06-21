// Pit Pat

// Write a function pitPat(max) that accepts a number as an arg. The function should return an array containing all positive numbers less than or equal to max that are divisible by either 4 or 6, but not both.


// your code here

function pitPat(num){
        let arr = []
    for(let i = 1; i <= num; i++){
        if (i % 4 == 0 && i % 6 == 0){
            continue
        } else if (i % 4 == 0 || i % 6 == 0){
            arr.push(i)
        }
    }
    return arr
}






console.log(pitPat(18)); // [ 4, 6, 8, 16, 18 ]
console.log(pitPat(30)); // [ 4, 6, 8, 16, 18, 20, 28, 30 ]