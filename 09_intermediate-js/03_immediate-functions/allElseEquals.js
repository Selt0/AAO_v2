// All Else Equal

// Write a function allElseEqual that takes in an array of numbers. The function should return the element of the array that is equal to half of the sum of all elements of the array. If there is no such element, the method should return null.


function allElseEqual(arr) {
    // your code here
    let halfSum = sumOfArr(arr)/2
    if (arr.includes(halfSum)){
        return halfSum
    } else {
        return null
    }
}

function sumOfArr(arr){
    return arr.reduce((a,b) => a + b , 0)
}

console.log(allElseEqual([2, 4, 3, 10, 1])); // 10
console.log(allElseEqual([6, 3, 5, -9, 1])); // 3
console.log(allElseEqual([1, 2, 3, 4]));     // null