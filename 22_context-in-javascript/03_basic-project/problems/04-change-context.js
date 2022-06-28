function changeContext(func, obj) {
  return func.call(obj)
}


class Person {
  constructor(name) {
    this.name = name;
  }
}

function extractName() {
  return this.name;
}

/*****************************************************************************/
/***************** DO NOT MODIFY ANYTHING UNDER THIS LINE ********************/

module.exports = changeContext;