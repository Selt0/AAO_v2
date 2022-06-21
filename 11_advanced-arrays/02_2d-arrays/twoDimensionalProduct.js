// Two Dimensional Product

// Write a function twoDimensionalProduct(array) that takes in a 2D array of numbers as an argument. The function should return the total product of all numbers multiplied together.


// your code here
function twoDimensionalProduct(arr){
    let sum = 1
    for (let i = 0; i < arr.length; i++){
        for(let j = 0; j < arr[i].length; j++){
            sum *= arr[i][j]
        }
    }
    return sum
}




let arr1 = [
    [6, 4],
    [5],
    [3, 1]
];
console.log(twoDimensionalProduct(arr1)); // 360

let arr2 = [
    [11, 4],
    [2]
];
console.log(twoDimensionalProduct(arr2)); // 88