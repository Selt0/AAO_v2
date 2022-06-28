const {Character} = require('./character');
const {Enemy} = require('./enemy');
const {Food} = require('./food');

class Player extends Character {

  constructor(name, startingRoom) {
    super(name, "main character", startingRoom);
  }

  move(direction) {

    const nextRoom = this.currentRoom.getRoomInDirection(direction);

    // If the next room is valid, set the player to be in that room
    if (nextRoom) {
      this.currentRoom = nextRoom;

      nextRoom.printRoom(this);
    } else {
      console.log("You cannot move in that direction");
    }
  }

  printInventory() {
    if (this.items.length === 0) {
      console.log(`${this.name} is not carrying anything.`);
    } else {
      console.log(`${this.name} is carrying:`);
      for (let i = 0 ; i < this.items.length ; i++) {
        console.log(`  ${this.items[i].name}`);
      }
    }
  }

  takeItem(itemName) {
    const item = this.currentRoom.getItemByName(itemName)
    // put item in player inventory
    this.items.push(item)

    // remove items from room
    this.currentRoom.items = this.currentRoom.items.filter(roomItems => roomItems !== item)

  }

  dropItem(itemName) {
    const item = this.getItemByName(itemName)
    // put item in room
    this.currentRoom.items.push(item)

    // remove item from inventory
    this.items = this.items.filter(playerItem => playerItem !== item)

  }

  eatItem(itemName) {
    const item = this.items.find(item => item.name === itemName)
    if (item instanceof Food){
      this.items = this.items.filter(playerItem => playerItem !== item)
      return `Oh yeah, that ${item.name}, hit the spot.`
    } else {
      return 'Silly human, you can\'t eat a ${item.name}'
    }
  }

  getItemByName(name) {
    return this.items.find(item => item.name === name)
  }

  hit(name) {    
    const enemy = this.currentRoom.getEnemyByName(name)
    enemy.applyDamage(this.strength)
    enemy.attackTarget = this
  }

  die() {
    console.log("You are dead!");
    process.exit();
  }

}

module.exports = {
  Player,
};
