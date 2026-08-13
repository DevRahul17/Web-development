// 🪨📄✂️ Rock, Paper & Scissors — Exercise 2
// Use JavaScript to create a game of Rock, Paper and Scissors. The game should ask the user to enter R, P, or S. The computer should be able to randomly generate R, P, or S and declare whether the user wins, loses, or draws using alert(). Use confirm() and prompt() wherever required.

// Rules:

// Rock (R) beats Scissors (S)
// Scissors (S) beats Paper (P)
// Paper (P) beats Rock (R)
// Same choice = Draw
const prompt = require("prompt-sync")();

let userchoice = prompt("Enter Your Choice R for Rock,P for Paper and S for Scissor");
let randomchoice = Math.floor(Math.random() * 3) + 1;
//It generates number between 1 to 3
let computerchoice;

if (randomchoice == 1) {
    computerchoice = "R";
}
else if (randomchoice == 2) {
    computerchoice = "P";
}
else {
    computerchoice = "S";
}

console.log("Your choice is :" , userchoice);
console.log("Computer choice is:" , computerchoice);

if (userchoice == computerchoice) {
    console.log("Draw!");
}
else if (
    (userchoice == "S" && computerchoice == "P") ||
    (userchoice == "R" && computerchoice == "S") ||
    (userchoice == "P" && computerchoice == "R")
) {
    console.log("You Win!");
}
else {
    console.log("You Lose!");
}