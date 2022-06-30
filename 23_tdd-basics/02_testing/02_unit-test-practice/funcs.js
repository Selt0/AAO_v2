function isFive(num) {
  return num === 5
}

function isOdd(number) {
  if (typeof number !== 'number') throw new Error('Should be a number')
  return (number % 2 !== 0)
}

function myRange(min, max, step = 1) {
  const arr = []
  for (let i = min; i <= max; i += step){
    arr.push(i)
  }
  return arr
}


module.exports = { isFive, isOdd, myRange };