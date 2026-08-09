//Basic Promise
let promise = new Promise((resolve, reject) => {
    let success = true;

    if (success) {
        resolve("Task completed!");
    }
    else {
        reject("Task failed!");
        console.log("Task failed");
    }
});

let prom1 = new Promise((resolve, reject) => {
    let a = Math.random();
    if (a < 0.5) {
        reject("No random number was not supporting");
    }
    else {
        setTimeout(() => {
            console.log("Yes i am done!");
            resolve("Rahul");
        }, 1000);
    }
})

const food = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Pizza delivered");
    }, 1000);
})

food.then((message) => {
    console.log(message);
}).catch((error) => {
    console.log(error);
})