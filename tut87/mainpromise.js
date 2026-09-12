import fs from "fs/promises";

let a = await fs.readFile("rahul.txt");

let b = await fs.writeFile("rahul.txt", "\n\n\npromise append");

console.log(a.toString(), b);