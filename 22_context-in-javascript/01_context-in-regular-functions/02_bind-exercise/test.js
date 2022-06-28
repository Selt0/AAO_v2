// Your code here
const Employee = require('./employee')

const john = new Employee('John Wick', 'Dog Lover')

// setTimeout(john.sayName, 2000) // undefined says hello

let sayHello = john.sayName

let sayHelloJohn = sayHello.bind(john)

// sayHelloJohn()
setTimeout(sayHelloJohn, 2000)


let sayOccupation = john.sayOccupation
let sayOccupationJohn = sayOccupation.bind(john)

setTimeout(sayOccupationJohn, 2000)