let button = document.getElementById("btn");

button.addEventListener("click", ()=>{
    document.querySelector(".box").innerHTML = "<b>I am clicked</b>";
});

document.addEventListener("dblclick", ()=>{
    alert("I am double clicked!");
})

document.addEventListener("contextlost", ()=>{
    alert("Don't hack us!");
})

document.addEventListener("keydown", (e)=>{
    console.log(e.key,e.keyCode);
})