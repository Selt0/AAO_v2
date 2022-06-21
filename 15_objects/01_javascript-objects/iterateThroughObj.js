// Iterate Through Obj

// Write a function printObject(obj) that prints out all key-value pairs of an object. The format should be key - value.

// HINT: use a for loop

// printObject(bootcamp); // prints
// name - App Academy
// color - Red
// population - 120

let bootcamp = {
  name: "App Academy",
  color: "Red",
  population: 120
};

function printObject(obj) {
  for (let [key, value] of Object.entries(obj)){
      console.log(`${key} - ${value}`)
  }
}
