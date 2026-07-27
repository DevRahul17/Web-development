console.log("It is Conditional Operator")

let age = 5;

if(age>18){
    console.log("You can Vote");
}

else{
    console.log("You cannot Vote");
}

let marks = 10;
let grace = 2;

//Arithmetic Operator
console.log(marks + grace);
console.log(marks - grace);
console.log(marks * grace);
console.log(marks / grace);
console.log(marks ** grace);
console.log(marks % grace);

//Assignment Operator
//marks = marks + grace;
marks += grace;
console.log(marks);

//Java ternary operator
let x = 5;
let y = 3;

let c = x>y ?(x-y):(y-x);
console.log(c);