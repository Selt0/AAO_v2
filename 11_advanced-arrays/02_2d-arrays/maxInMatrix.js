// Max in Matrix

// Write a function maxInMatrix(matrix) that takes in a 2-dimensional array (matrix) and returns the largest value in the matrix. The matrix contains at least one value.


function maxInMatrix(matrix) {
    let matrixFlat = matrix.flat()
    return Math.max(...matrixFlat)
}


matrix = [[11,  2,-99],
          [20, 19, 10],
          [47, 72, 56]]

console.log(maxInMatrix(matrix)); // 72
