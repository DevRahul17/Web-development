//Exercise 1 - Guess the number
// Write a Java Script program to generate a
// random number and store it in a
// Variable. The program then takes an input from the user to tell them whether the guess was Correct, greater or lesser than the original number.
// 100 - (n of guesses) is the score of the user.The program is expected to terminate once the number is guessed. Number should be between  1 - 100.
const prompt = require("prompt-sync")();

let randomnumber = Math.floor(Math.random() * 100) + 1;
let guesses = 0;

while (true) {
    let guess = Number(prompt("Guess a number between 1 to 100:"));
    guesses++;

    if (guess == randomnumber) {
        console.log("Correct! You guessed the number in " + guesses + " guesses");
        console.log("Your score is: " + (100 - guesses));
        break;
    }
    else if (guess > randomnumber) {
        console.log("Your guess is greater than the original number");
    }
    else {
        console.log("Your guess is smaller than the original number");
    }
}