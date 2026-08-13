console.log("Javascript");

let boxes = document.getElementsByClassName("box");
console.log(boxes);

boxes[2].style.backgroundColor = "red";

document.getElementById("redbox").style.backgroundColor = "purple";

document.querySelector(".box").style.backgroundColor = "orange";
console.log(document.querySelectorAll(".box"));

// document.querySelectorAll(".box").forEach((e) => {
//     e.style.backgroundColor = "hotpink";
// })