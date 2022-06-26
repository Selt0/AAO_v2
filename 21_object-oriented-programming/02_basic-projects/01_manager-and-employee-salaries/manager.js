const Employee = require('./employee')

class Manager extends Employee {
    constructor(name, salary, title, manager = null, employees = []){
        super(name, salary, title, manager)
        this.employees = employees
    }

    addEmployee(employee){
        this.employees.push(employee)
    }
}


const splinter = new Manager('Splinter', 100000, 'Sensei');
console.log(splinter);

module.exports = Manager