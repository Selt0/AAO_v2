const readline = require('readline')
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});


const play = () => {
    let min
    let max
    let secretNumber
    let attempts

    rl.question('Enter a max number: ', grabMaxNumber)

    function grabMaxNumber(maxInput){
        max = maxInput

        rl.question('Enter a min number: ', grabMinNumber)
    }

    function grabMinNumber(minInput){
        min = minInput

        if(validInput(min, max)){
            secretNumber = grabRandomNumber(min, max)

            console.log(`I'm thinking of a number between ${min} and ${max}...`)

            rl.question('Enter max number of guesses: ',grabNumberOfGuesses)
        } else {
            play()
        }        
    }
    
    function grabNumberOfGuesses(input){
        attempts = input
        askGuess()
    }

    function askGuess() {
        rl.question('Enter your guess: ', (answer) => {
            if(checkGuess(Number(answer))){
                console.log('You win!')
                rl.close()
            } else {
                attempts--
                if(isGameOver(attempts)){
                    console.log('You\'re out of guesses.')
                    console.log('You Lose.')
                    rl.close()
                } else {
                    askGuess()
                }
            }
        })
    }

    function checkGuess(num) {
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
}

play()



// helpers
function grabRandomNumber(min, max) {
    min = Math.ceil(min); // round up
    max = Math.floor(max); // round down
    return Math.floor(Math.random() * (max - min + 1) + min); 
}

function validInput(min,max){
    if (max < min){
        console.log('max must be greater than min')
        return false
    }

    return true
}

function isGameOver(attempts){
    return attempts === 0
}