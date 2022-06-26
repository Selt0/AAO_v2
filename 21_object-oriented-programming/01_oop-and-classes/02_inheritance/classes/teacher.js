const Person = require('./person');

class Teacher extends Person{
  constructor(firstName, lastName, subject, yearsOfExperience) {
    super(firstName,lastName)
    this.subject = subject
    this.yearsOfExperience = yearsOfExperience
  }

  static combinedYearsOfExperience(teachers){
    return teachers.map(teacher => teacher.yearsOfExperience)
                    .reduce((accum, val) => accum + val)
  }
}

/****************************************************************************/
/******************* DO NOT EDIT CODE BELOW THIS LINE ***********************/

try {
  module.exports = Teacher;
} catch {
  module.exports = null;
}