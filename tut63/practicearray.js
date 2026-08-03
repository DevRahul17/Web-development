/* Q1. Write a program to print the marks of a student in an object using for loop.
obj = {harry:98,rohan:70,aakash:7} */

let obj = {
    "harry": 98,
    "rohan": 70,
    "aakash": 7
}
for (let key in obj) {
    console.log(key + " : " + obj[key]);
}

/* Q2. Write Q1 using for loop */
let obj = {
    "harry": 98,
    "rohan": 70,
    "akash": 7
}

let keys = Object.keys(obj);

for ( let i = 0; i < keys.length; i++){
    console.log(keys[i] + " : " + obj[keys[i]]);
}

/* Q3. Write a program to print "try again" until the user enters the correct number. */
const prompt = require("prompt-sync")();

let correctnum = 7;
let guess = prompt("Enter a number: ");

while(guess != correctnum){
    console.log("Try Again");
    guess = prompt("Enter a number:");
}
console.log("You entered the correct number");

/* Q4.Write a function to find mean of 5 numbers. */
const prompt = require("prompt-sync")();

let total = 5;
let a = Number(prompt("Enter number 1: "));
let b = Number(prompt("Enter number 2: "));
let c = Number(prompt("Enter number 3: "));
let d = Number(prompt("Enter number 4: "));
let e = Number(prompt("Enter number 5: "));

function mean() {
    let x = (a+b+c+d+e)/total;
    return x;
}
console.log(mean());