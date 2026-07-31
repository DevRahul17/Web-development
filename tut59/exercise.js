/* Create a faulty calculator using JavaScript

This faulty calculator does following:
1. It takes two numbers as input from the user
2. It perfoms wrong operations as follows:

+ ---> -
* ---> +
- ---> /
/ ---> **


It performs wrong operation 10% of the times

*/
const prompt = require("prompt-sync")();//For using prompt

let num1 = parseFloat(prompt("Enter number 1 :"));
let num2 = parseFloat(prompt("Enter number 2 :"));
let operator = prompt("Enter your operator(+,-,/,*,**)");

let isfaulty = Math.random() < 0.1;//For chosing random number from 0 to 1 and less than 10%

let result;

if(isfaulty){
    console.log("Faulty calculator");

    switch(operator){
        case "+":
            result = num1 - num2;
            break;
        case "*":
            result = num1 + num2;
            break;
        case "-":
            result = num1 / num2;
            break;
        case "/":
            result = num1 ** num2;
            break;
        default:
            console.log("Invalid Operator");
            result = null;
    }
}

else{
    console.log("Correct calculator");

    switch(operator){
        case "+":
            result = num1 + num2;
            break;
        case "*":
            result = num1 * num2;
            break;
        case "-":
            result = num1 - num2;
            break;
        case "/":
            result = num1 / num2;
            break;
        case "**":
            result = num1 ** num2;
            break;
        default:
            console.log("Invalid Operator");
            result = null;
    }
}

if(result !== null){
    console.log(`Result: ${result}`);
    // alert(`Result: ${result}`);
}