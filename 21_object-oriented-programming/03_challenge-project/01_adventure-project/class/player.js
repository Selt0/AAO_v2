const { Food } = require('./food')

class Player {

    constructor(name, startingRoom) {
        this.name = name;
        this.currentRoom = startingRoom;
        this.items = [];
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
        this.currentRoom.items = this.currentRoom.items.filter(roomItem => roomItem !== item)
        this.items.push(item)
    }

    dropItem(itemName) {
        const item = this.getItemByName(itemName)
        this.items = this.items.filter(playerItem => playerItem !== item)

        this.currentRoom.items.push(item)
    }

    eatItem(itemName) {
        const item = this.getItemByName(itemName)
        if (item instanceof Food){
            this.items = this.items.filter(playerItem => playerItem != item)
        }

    }

    getItemByName(name) {
        return this.items.filter(item => name == item.name)[0]
    }
}

module.exports = {
  Player,
};
