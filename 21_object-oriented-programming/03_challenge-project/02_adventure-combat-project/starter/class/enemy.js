const {Character} = require('./character');


class Enemy extends Character {
  constructor(name, description, currentRoom) {
    super(name, description, currentRoom)
    this.cooldown = 3000
    this.attackTarget = null
  }

  setPlayer(player) {
    this.player = player;
  }


  randomMove() {
    const exits = this.currentRoom.getExits()
    const randomExit = exits[Math.floor(Math.random() * exits.length)]
    const newRoom = this.currentRoom.getRoomInDirection(randomExit)
    this.currentRoom = newRoom
    this.cooldown = 3000
  }

  takeSandwich() {
    const roomItems = this.currentRoom.items.map(item => item.name)

    if (roomItems.includes('sandwich')){
      alert('OH BOY A SANDWICH! MINE MINE MINE!')
      const item = this.currentRoom.getItemByName('sandwich')

      this.items.push(item)

      this.currentRoom.items = this.currentRoom.items.filter(roomItem => roomItem !== item)
    } else {
      alert('boy, I sure am hungry.')
    }
  }

  // Print the alert only if player is standing in the same room
  alert(message) {
    if (this.player && this.player.currentRoom === this.currentRoom) {
      console.log(message);
    }
  }

  rest() {
    // Wait until cooldown expires, then act
    const resetCooldown = function() {
      this.cooldown = 0;
      this.act();
    };
    console.log('resting....')
    setTimeout(() => {
      resetCooldown()
    }, this.cooldown);
  }

  attack() {
    console.log(`${this.name} attacks for ${this.strength} damage!`)
    this.attackTarget.applyDamage(this.strength)
    this.cooldown = 3000
  }

  applyDamage(amount) {
    this.healeth -= amount;
    if (this.helath <= 0){
      this.die()
    } else {
      this.attack()
    }
  }



  act() {
    if (this.health <= 0) {
      // Dead, do nothing;
      this.die()
    } else if (this.cooldown > 0) {
      this.rest();
    } else if (this.attackTarget){
      this.attack()
    } else {
      this.scratchNose();
      this.takeSandwich()
      this.rest();
    }
  }


  scratchNose() {
    this.cooldown += 1000;

    this.alert(`${this.name} scratches its nose`);

  }


}

module.exports = {
  Enemy,
};
