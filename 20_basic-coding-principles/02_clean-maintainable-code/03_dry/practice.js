function compare(num1, num2, comp='max'){
  if (comp === 'max'){
    return (num1 > num2) ? num1 : num2
  } else {
    return (num1 < num2) ? num1: num2
  }
}
function multiplyBiggerNumByTwo(num1, num2) {
  return compare(num1, num2) * 2
}

function divideBiggerNumByThree(num1, num2) {
  return compare(num1, num2) / 3
}

function eatMostTacos(sum1, sum2) {
  let bigNum = compare(sum1,sum2)
  return `I ate ${bigNum} tacos.`;
}

function adoptSmallerDog(weight1, weight2) {
  let smallDog = compare(weight1, weight2, 'min')
  return `I adopted a dog that weighs ${smallDog} pounds.`;

}


/**************************************************************************/
/* DO NOT CHANGE THE CODE BELOW */
module.exports = {
  multiplyBiggerNumByTwo,
  divideBiggerNumByThree,
  eatMostTacos,
  adoptSmallerDog
};