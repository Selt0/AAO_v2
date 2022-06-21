// Lucky Numbers

// Write a function luckyNumbers(matrix) that takes in a 2-dimensional array (matrix) and returns all lucky numbers in any order. A lucky number is the minimum element in its row and the maximum in its column.


function luckyNumbers(matrix) {
    const min = matrix.map(arr => Math.min(...arr) )
    const max = matrix[0].map((_, i) => Math.max(...matrix.map(col => col[i])))
    
    return min.filter(num => max.includes(num))
 }

matrix = [[ 5,  9, 21],
          [ 9, 19,  6],
          [12, 14, 15]]

console.log(luckyNumbers(matrix)); // [12]

matrix = [[ 5, 10,  8,  6],
          [10,  2,  7,  9],
          [21, 15, 19, 10]]

console.log(luckyNumbers(matrix)); // [10]
