function oddIndices(arr) {
    // Return an array containing all the odd indices in the array
    // Your code here
    let oddArr = []
    for(let i = 1; i <arr.length; i+=2){
        oddArr.push(arr[i])
    }
    return oddArr
}

function oddReverse(arr) {
    // Return an array containing all the odd indices starting from the end
    // Your code here
    let oddarr= []
    for(let i = arr.length -1; i < 0; i -=2){
        oddReverse.push(arr[i])
    }
    return oddarr
}

function secondPower(arr) {
    // Return an array containing all indices that are powers of 2
    // Your code here
    let secondarr = []
    for (let i = 1; i < arr.length; i *=2){
        secondarr.push(arr[i])
    }
    return secondarr
}

function nthPower(arr, n) {
    // Return an array containing all indices that are powers of n
    // Your code here
    let power = []
    for (let i = 1; i < arr.length; i *= n){
        power.push(arr[i])
    }
    return power
}

function firstHalf(arr) {
    // Return an array containing the first half of an array
    // Include middle index on odd length arr
    // Your code here
    let half = []
    for (let i = 0; i < arr.length/2; i++) {
        half.push(arr[i])
    }
    return half
}

function secondHalf(arr) {
    // Return an array containing the second half of an array
    // Exclude middle index on odd length arr
    // Your code here
    let half = []
    for(let i = arr.length/2; i < arr.length; i ++){
        half.push(arr[i])
    }
    return half
}

module.exports = {
    oddIndices,
    oddReverse,
    secondPower,
    nthPower,
    firstHalf,
    secondHalf
}
