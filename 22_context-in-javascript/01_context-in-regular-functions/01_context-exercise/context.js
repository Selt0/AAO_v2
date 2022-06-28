function eat() {
  console.log(`${this.name} eats fish food`);
}

class Fish {
  constructor(name) {
    this.name = name;
  }

  swim() {
    console.log(`${this.name} swimming in the water`);
  }
}

const nemo = new Fish('Nemo');

/********************************* Scenario 1 *********************************/
// eat(); // undefined eats food


/********************************* Scenario 2 *********************************/
// nemo.eat = eat;
// nemo.eat(); // nemo eats food


/********************************* Scenario 3 *********************************/
// nemo.eat = eat;
// eat(); // undefined eats food


/********************************* Scenario 4 *********************************/
// nemo.swim(); // nemo swimming in water


/********************************* Scenario 5 *********************************/
const swim = nemo.swim;
swim(); // error