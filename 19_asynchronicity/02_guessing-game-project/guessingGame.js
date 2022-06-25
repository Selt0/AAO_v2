const readline = require('readline')
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});


const play = () => {
    let min
    let max
    let secretNumber

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

            askGuess()
        } else {
            play()
        }        
    }

    function askGuess() {
        rl.question('Enter your guess: ', (answer) => {
            if(checkGuess(Number(answer))){
                console.log('You win!')
                rl.close()
            } else {
                askGuess()
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
