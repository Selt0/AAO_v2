// Min Value

// Write a function minValue(nums) that takes in an array of numbers as an arg. The function should return the smallest number of the array. If the array is empty, the function should return null.


// your code here

function minValue(arr){
    if (arr.length == 0) return null
    
    return Math.min(...arr)
}





console.log(minValue([4, 6, 3, 5, 2, 4])); // 2
console.log(minValue([-2, -3, -7, 3 ])); // -7
console.log(minValue([])); // null