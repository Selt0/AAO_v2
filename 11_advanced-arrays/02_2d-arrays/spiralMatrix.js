// Spiral Matrix

// Write a function spiralOrder(matrix) that takes in a 2-dimensional array (matrix) and returns an array containing the elements in spiral order.


function spiralOrder(matrix) {
    const result = []
    while (matrix.length){
        const firstRow = matrix.shift()
        result.push(...firstRow)
        for (const row of matrix) {
            let val = row.pop()
            if (val)
                result.push(val)
                row.reverse()
        }
        matrix.reverse()
    }
    return result
}


matrix = [[ 1, 2, 3],
          [ 4, 5, 6],
          [ 7, 8, 9]] 

console.log(spiralOrder(matrix)); // [1,2,3,6,9,8,7,4,5]

matrix = [[1, 2, 3, 4],
          [5, 6, 7, 8],
          [9,10,11,12]]


console.log(spiralOrder(matrix)); // [1,2,3,4,8,12,11,10,9,5,6,7]
