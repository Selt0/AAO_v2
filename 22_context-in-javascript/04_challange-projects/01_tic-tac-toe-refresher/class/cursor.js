const Screen = require("./screen");

class Cursor {

  constructor(numRows, numCols) {
    this.numRows = numRows;
    this.numCols = numCols;

    this.row = 0;
    this.col = 0;

    this.gridColor = 'black';
    this.cursorColor = 'yellow';

  }

  resetBackgroundColor() {
    Screen.setBackgroundColor(this.row, this.col, this.gridColor);
  }

  setBackgroundColor() {
    Screen.setBackgroundColor(this.row, this.col, this.cursorColor);
  }

  up() {
    // move cursor up
    if (this.row !== 0){
      return this.row--
    }
  }

  down() {
    // Move cursor down
    if (this.row !== 2){
     return this.row++
    }
  }

  left() {
    if (this.col !== 0){
      return this.col--
    }
  }

  right() {
    if (this.col !== 2){
      return this.col++
    }
  }

}


module.exports = Cursor;
