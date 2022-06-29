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

    Screen.addCommand('up', 'moves cursor up', this.cursor.up.bind(this.cursor))
    Screen.addCommand('down', 'moves cursor down', this.cursor.down.bind(this.cursor))
    Screen.addCommand('left', 'moves cursor left', this.cursor.left.bind(this.cursor))
    Screen.addCommand('right', 'moves cursor right', this.cursor.right.bind(this.cursor))

    Screen.addCommand('o', 'places move on the board', TTT.placeMove.bind(this, 'O'))
    Screen.addCommand('x', 'places move on the board', TTT.placeMove.bind(this, 'X'))


    Screen.render();
  }


  static placeMove(symbol){
    let row = this.cursor.row
    let col = this.cursor.col

    this.grid[row][col] = symbol
    Screen.setGrid(row, col, symbol)

    let winner = TTT.checkWin(this.grid)
    if (winner){
      TTT.endGame(winner)
    }
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
    return grid.every(row => TTT.checkAll(row, ' '))
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
