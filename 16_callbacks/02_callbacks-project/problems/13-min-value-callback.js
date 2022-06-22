/*******************************************************************************
Write a function `minValueCallback` that accepts an array and an optional callback as arguments.
If a callback is not passed in, then the function should return the smallest
value in the array. If a callback is passed in, then the function should return
the result of the smallest value being passed into the given callback.

Examples:
console.log(minValueCallback([64, 25, 49, 9, 100]));             // 9
console.log(minValueCallback([64, 25, 49, 9, 100], Math.sqrt));  // 3

*******************************************************************************/

// p = arr | optional cb
// if cb not passed -> return smallest value
// if cb passed -> return result of smallest value in cb
let minValueCallback = function(arr, cb) {
    let smallestValue = Math.min(...arr)
    
    return cb === undefined ? smallestValue : cb(smallestValue)
};






/*****************DO NOT MODIFY ANYTHING UNDER THIS  LINE**********************/
module.exports = minValueCallback;
