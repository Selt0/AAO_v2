const readline = require('readline')
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const secretNumber = 5


const checkGuess = (num) => {
    if (num > secretNumber){
        console.log('Too high.')
        return false
    } else if (num < secretNumber){
        console.log('Too low.')
        return false
    } else {
        console.log('Correct!')
        return true
    }
}

const askGuess =  () => {
    rl.question('Enter your guess: ', (answer) => {
        if(checkGuess(Number(answer))){
            console.log('You win!')
            rl.close()
        } else {
            askGuess()
        }
    })
}

askGuess()