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

  up(){
    this.resetBackgroundColor()
    if(this.valid_pos(this.row-1, this.col)){
      this.row--
    }

    this.setBackgroundColor()
    Screen.render()
  }

  down(){
    this.resetBackgroundColor()
    if(this.valid_pos(this.row+1, this.col)){
      this.row++
    }

    this.setBackgroundColor()
    Screen.render()
  }

  left() {
    // Move cursor left
    this.resetBackgroundColor()
    if(this.valid_pos(this.row, this.col-1)){
      this.col--
    }

    this.setBackgroundColor()
    Screen.render()
  }

  right() {
    this.resetBackgroundColor()
    if(this.valid_pos(this.row, this.col+1)){
      this.col++
    }

    this.setBackgroundColor()
    Screen.render()
  }

  valid_pos(row, col){
    return 0 <= row && row < this.numRows && 0 <= col && col < this.numCols;
  }
}


module.exports = Cursor;
