const readline = require('readline');

/********************************* CONSTANTS *********************************/
const VALID_MOVES = {
  r: {
    name: 'Rock',
    winsAgainst: 's'
  },
  p: {
    name: 'Paper',
    winsAgainst: 'r'
  },
  s: {
    name: 'Scissors',
    winsAgainst: 'p'
  }
};

/********************************* GAME DATA *********************************/
let wins = 0;
let losses = 0;
let ties = 0;

/* DO NOT CHANGE THE CODE ABOVE */

/***************************** HELPER FUNCTIONS ******************************/
function printHelp() {
  console.log("  Type 'r' for Rock");
  console.log("  Type 'p' for Paper");
  console.log("  Type 's' for Scissors");
  console.log("  Type 'q' to quit");
  console.log("  Type 'h' for a list of valid commands\n");
}

function getWinner(move1, move2) {
  if (VALID_MOVES[move1].winsAgainst === move2){
    return 1
  } else if (move1 === move2){
    return 0
  } else {
    return -1
  }
}

function getCPUMove() {
  const validMoveKeys = Object.keys(VALID_MOVES);
  const randomIndex = Math.floor(Math.random() * validMoveKeys.length);
  return validMoveKeys[randomIndex];
}

function processMove(cmd, cpu) {
  console.log(`You pick ${cmd}, computer picks ${cpu}.`);

  const result = getWinner(cmd, cpu)
  if (result === 0) { // tie
    console.log("You tie.\n");
    ties++;
  }
  else if (result === 1) { // win
    console.log("You win!\n");
    wins++;
  } else { // loss
    console.log("You lose...\n");
    losses++;
  }
}

function isGameOver(wins, losses){
  if (wins === 3){
    gameOverMessage('winner')
    return true
  } else if (losses === 3) {
    gameOverMessage('loser')
    return true
  } else {
    return false
  }
}

function gameOverMessage(message){
  if (message === 'winner'){
    console.log('You won the game!\n')
  } else {
    console.log('You lost the game.\n')
  }
}

/******************************* MAIN FUNCTION *******************************/
function promptInput(rl) {
  console.log(`${wins} wins - ${losses} losses - ${ties} ties`);
  rl.question('> ', (cmd) => {
    cmd = cmd.toLowerCase();

    if (cmd === 'h') {
      console.log("\nHelp:\n");
      printHelp()
    } else if (cmd === 'q') {
      rl.close();
      return;
    } else if (VALID_MOVES[cmd]){
      
      const cpu = getCPUMove()

      processMove(cmd, cpu)

      if(isGameOver(wins, losses)){
        rl.close()
        return
      }
     
    } else {
      console.log("\nInvalid command.\n");
      printHelp()
    }

    promptInput(rl);
  });
}

/****************************** INITIALIZE GAME ******************************/
function initializeGame() {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });
  console.log("Welcome to Rock/Paper/Scissors\n");
  printHelp()

  promptInput(rl);
}

// start the game if running this file directly, `node game.js`
// do not start the game if running test specs
if (typeof require !== 'undefined' && require.main === module) {
  initializeGame();
}

/**************************************************************************/
/* DO NOT CHANGE THE CODE BELOW */
module.exports = {
  printHelp,
  getWinner,
  getCPUMove,
  processMove,
  promptInput
};