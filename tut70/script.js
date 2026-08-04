console.log("Script.js initializing");

//Select all boxes
let boxes = document.getElementsByClassName("box");
//let boxes = document.querySelector(".container").children

//Function to generate a random RGB color
function getrandomcolor() {
    let r = Math.floor(Math.random() * 256);
    let g = Math.floor(Math.random() * 256);
    let b = Math.floor(Math.random() * 256);
    return `rgb(${r}, ${g}, ${b})`;
}

//Assign random text color and background
Array.from(boxes).forEach(e => {
    e.style.backgroundColor = getrandomcolor();
    e.style.color = getrandomcolor();
})