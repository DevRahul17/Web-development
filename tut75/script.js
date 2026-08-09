//Asynchronous
console.log("It prints first");
console.log("It prints after first");

setTimeout(() => {
    console.log("I am inside setTimeout");
}, 1000);

console.log("It prints before setTimeot and it is asynchronous");

//Callback
const fn = () => {
    console.log("I am function");
}

const callback = (arg, fn) => {
    console.log(arg);
    fn();
}

const loadscript = (src, callback) => {
    let sc = document.createElement("script");
    sc.scr = src;
    sc.onload = callback("Rahul", fn);
    document.head.append(sc);
}

loadscript("https://cdnjs.cloudflare.com/ajax/libs/prism/9000.0.1/prism.min.js", callback )