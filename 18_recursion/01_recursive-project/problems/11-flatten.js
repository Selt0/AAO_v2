/***********************************************************************
Write a recursive function called `flatten` that takes a single array with
any number of nested arrays and returns and array with all the nested
contents on one level.

Examples:

flatten([]); // []
flatten([1, 2]); // [1, 2]
flatten([1, [2, [3]]]); // [1, 2, 3]
***********************************************************************/

function flatten(arr){
  const flat = []

  arr.forEach(item => {
    if (Array.isArray(item)){
      flat.push(...flatten(item))
    } else {
      flat.push(item)
    }
  }) 
  return flat
}
  
// console.log(flatten([])); // []
console.log(flatten([1, 2])); // [1, 2]
// [1, ...flatten([2])]
//[2, ...flatten([])]
console.log(flatten([1, [2, [3]]])) // [1, 2, 3]
// [1, ...([2,[3]])] => [1, ... [2,3]]
// [2 , ...([3])] => [2,..[3]] => [2,3]
// [3, ...[]] => [3]

/**************DO NOT MODIFY ANYTHING UNDER THIS LINE*****************/
try {
  module.exports = flatten;
} catch (e) {
  module.exports = null;
}
