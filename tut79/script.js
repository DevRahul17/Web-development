const prompt = require("prompt-sync")();

let a = prompt("Enter first number");
let b = prompt("Enter second number");

if(isNaN(a) || isNaN(b)){
    throw SyntaxError("It is not a number");
}
let sum = parseInt(a) + parseInt(b);

console.log("The sum is ",sum);

function main(){
    try{
        console.log("The sum of a and b is ",sum*x);
    }
    catch(error){
        console.log(error);
        console.log("It throws error using catch");
    }
}

function main1(){
    try{
        let y = 7;
        console.log("The sum of a and b is ",sum*y);
        return true;
    }
    catch(error){
        console.log(error);
        console.log("It throws error using catch");
        return false;
    }
    finally{
        console.log("It can run mainly inside function it is 100% run either their is return in program");
    }
}

main();
main1();