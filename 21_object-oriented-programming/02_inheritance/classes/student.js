const Person = require('./person');

class Student extends Person{
  constructor(firstName, lastName, major, GPA){
    super(firstName, lastName)
    this.major = major
    this.GPA = GPA
  }

  static compareGPA(student1, student2){
    let highestGPA
    if (student1.GPA > student2.GPA){
      highestGPA = student1
    } else if (student2.GPA > student1.GPA){
      highestGPA = student2
    } else {
       return 'Both students have the same GPA.'
    }

    return `${highestGPA.firstName} ${highestGPA.lastName} has the higher GPA.`
  }
} 

/****************************************************************************/
/******************* DO NOT EDIT CODE BELOW THIS LINE ***********************/

try {
  module.exports = Student;
} catch {
  module.exports = null;
}