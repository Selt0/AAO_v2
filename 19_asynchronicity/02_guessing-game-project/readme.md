# Guessing Game Project

 A simple game where the user has to guess a secret number that is chosen at random. Upon making a guess, the user will receive a hint indicating if their guess is too small or too large. This game is played in the console.

 [](./Screen%20Shot%202022-06-25%20at%208.08.30%20AM.png)

## Overview

I built this using vanilla javascript while using node's readline module which provides an interface for reading data from a Readable stream (such as process.stdin) one line at a time.

To run the game, move to the project folder and type the following command in the console.

```js
node guessingGame.js
```

### Features

Users should be able to:

- Define the min and max number to set a range for the possible secret number.
- Set the number of attempts they want to have.
- Enter their guess
- See a message telling them whether their guess was Too High or Too Low.
- See a message telling them Game Over when they have no attempts left.
- See a message telling them You Win! when they guess correctly.

### Screenshot

![](./Screen%20Shot%202022-06-25%20at%208.08.30%20AM.png)

### Built with

- JavaScript
- [Readline module](https://nodejs.org/api/readline.html#rlquestionquery-options-callback)


### What I learned

The readline question method is asynchronous. In order to properly wait for the responses, I had to chain the callbacks, aka putting the next command at the end of the callback. This will have to do until I learn more about promises with async/await.

```js

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

            rl.question('Enter max number of guesses: ', grabNumberOfGuesses)
        } else {
            play()
        }        
    }

}

```

### Continued development

I want to get more comfortable building projects with minimum amount of specs/tasks given. I've noticed I'm good at creating solutions for a given tasks but if there aren't any tasks, I'm left stumped. I want to be confident in my own design decisions. I need to focus on making it work first and then go back and refactor.

### Useful resources

- [readline docs](https://nodejs.org/api/readline.html#rlquestionquery-options-callback)

## Author

- Website - [Michael Martinez](https://michael-martinez.netlify.app/)
- Twitter - [@MMocomochi](https://twitter.com/MMocomochi)