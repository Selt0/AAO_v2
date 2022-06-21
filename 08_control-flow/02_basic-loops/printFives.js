// Print Fives

// Write a function printFives(max) that prints out the multiples of 5 that are less than max.

// Try to solve this in two ways, using a conditional (if) and without using a conditional.


function printFives1For(max) {
  for (let i = 0; i < max; i += 1) {
    if (i % 5 === 0) {
      console.log(i);
    }
  }
}

function printFives1(max) {
  let i = 0;
  while (i < max) {
    if (i % 5 === 0) {
      console.log(i);
    }
    i++;
  }
}

function printFives2(max) {
  for (let i = 0; i < max; i += 5) {
    console.log(i);
  }
}

function printFives2While(max) {
  let i = 0;
  while (i < max) {
    console.log(i);
    i += 5;
  }
}
