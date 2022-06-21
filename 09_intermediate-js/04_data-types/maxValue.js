// Max Value

// Write a function maxValue(nums) that takes in an array of numbers as an arg. The function should return the largest number of the array. If the array is empty, the function should return null

// your code here
function maxValue(arr){
    if (arr.length == 0) return null
    
    return Math.max(...arr)

}


console.log(maxValue([4, 6, 3, 5, 42, 4])); // 42
console.log(maxValue([-2, -3, -7, 3 ])); // 3
console.log(maxValue([])); // null