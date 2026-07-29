console.log("Tutorial on Loops")

let a = 1;
// console.log(a);
// console.log(a+ 1);
// console.log(a+ 2);

//5 Loops in Javascript
//For Loop
for (let i = 0; i <= 10; i++) {
    console.log(i);
}

//For in loop
let obj = {
    name: "Rahul",
    role: "Programmer",
    company: "DevRahul17"
}

for (const key in obj) {
    console.log(key);
}

//For of loop(It is used for characters)
for (const char of "Rahul") {
    console.log(char);
}

//While loop
let i = 0;
while (i <= 10) {
    console.log(i);
    i++;
}

//Do-While loop
let x = 0;
do {
    console.log(x);
    x++;
} while (x <= 10)