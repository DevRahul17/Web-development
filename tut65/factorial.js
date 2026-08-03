/* Factorial using For loop and Reduced */
Using For Loop
const prompt = require("prompt-sync")();

let num = Number(prompt("Enter a number: "));
let fact = 1;
for(let i = 1; i <= num; i++){
   fact = fact * i;
}
console.log("Factorial of", num ,"is" , fact);

//Using Reduced 
const prompt = require("prompt-sync")();

let num = Number(prompt("Enter a number: "));

let arr = [];

for(let i = 1; i <= num; i++){
    arr.push(i);
}

let fact = arr.reduce((product,current)=>{
    return product * current;
}, 1);

console.log("Factorial of", num, "is", fact);