//Working with Files: fs and path Module
import fs from "fs";
console.log("starting");
fs.writeFile("rahul.txt", "First starting then write then ending", () => {
    console.log("done");
    fs.readFile("rahul.txt", (error, data) => {
        console.log(error, data.toString());
    })
});

fs.appendFile("rahul.txt" , "appendvariables", (e, d)=>{
    console.log(d);
})
console.log("ending"); 