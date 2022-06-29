const Screen = require("./screen");
const Cursor = require("./cursor");

class TTT {

  constructor() {

    this.playerTurn = "O";

    this.grid = [[' ',' ',' '],
                 [' ',' ',' '],
                 [' ',' ',' ']]

    this.cursor = new Cursor(3, 3);

    // Initialize a 3x3 tic-tac-toe grid
    Screen.initialize(3, 3);
    Screen.setGridlines(true);

    // Replace this with real commands
    Screen.addCommand('t', 'test command (remove)', TTT.testCommand);

    Screen.render();
  }

  // Remove this
  static testCommand() {
    console.log("TEST COMMAND");
  }

  static checkWin(grid) {
    // Return 'X' if player X wins
    // Return 'O' if player O wins
    let winner = TTT.horizontalWin(grid) ||
                 TTT.verticalWin(grid) ||
                 TTT.diagonalWin(grid)

    if (TTT.isEmpty(grid)){
      return false
    } else if (winner){
      return winner
    } else if (TTT.isTie(grid)){
      return 'T'
    } else if (TTT.onGoingGame(grid)){
      return false
    }
  }

  static endGame(winner) {
    if (winner === 'O' || winner === 'X') {
      Screen.setMessage(`Player ${winner} wins!`);
    } else if (winner === 'T') {
      Screen.setMessage(`Tie game!`);
    } else {
      Screen.setMessage(`Game Over`);
    }
    Screen.render();
    Screen.quit();
  }

  static isEmpty(grid){
    return grid.every(row => row.every(cell => cell === ' '))
  }

  static horizontalWin(grid){
   if (grid.some(row => TTT.checkAll(row, 'X'))){
    return 'X'
   } else if (grid.some(row => TTT.checkAll(row, 'O'))){
    return 'O'
   } else {
    return false
   }
  }

  static verticalWin(grid){
    for (let i = 0; i < grid.length; i++){
      let col = []
      for (let j = 0; j < grid[i].length; j++){
        col.push(grid[j][i])
      }

      if (TTT.checkAll(col, 'X')){
        return 'X'
      } else if (TTT.checkAll(col, 'O')){
        return 'O'
      }
    }
    return false
  }

  static diagonalWin(grid){
    // first cross = [0,0] [1,1] [2,2]
    let cross = []
    for (let i = 0; i < grid.length; i++){
      cross.push(grid[i][i])
    }

    if (TTT.checkAll(cross, 'X')){
      return 'X'
    } else if (TTT.checkAll(cross, 'O')){
      return 'O'
    }

    //second cross = [0,2] [1,1] [2,0]
    cross = []
    for(let i = 0, j = 2; i < grid.length; i++, j--){
      cross.push(grid[j][i])
    }

    if (TTT.checkAll(cross, 'X')){
      return 'X'
    } else if (TTT.checkAll(cross, 'O')){
      return 'O'
    }
    return false
  }

  static isTie(grid){
    return grid.every(row => row.every(cell => cell !== ' '))
  }

  static onGoingGame(grid){
    return grid.some(row => row.some(cell => cell === ' '))
  }

  static checkAll(arr, symbol){
    if (arr.every(cell => cell === symbol)){
      return true
    }

    return false
  }

}

module.exports = TTT;
