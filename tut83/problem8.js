//Problem 8
async function doubleNumbers(numbers) {
    return numbers.map(
        (num) =>
            new Promise((resolve) => {
                setTimeout(() => {
                    resolve(num * 2);
                }, 500);
            })
    );
}

// Example
const promises = await doubleNumbers([1, 2, 3, 4]);

console.log(await Promise.all(promises));
// [2, 4, 6, 8]

//Problem 9
async function placeorder() {
    return new Promise((resolve) => {
        //Randomly delay between 1 to 3 seconds
        const delay = Math.floor(Math.random() * 2000) + 1000;

        setTimeout(() => {
            resolve("Order placed successfully! Your order is confirmed.");
        }, delay);
    });
}

//Calling the function
placeorder().then((message) => {
    console.log(message);
})

// How it works
// async function placeOrder() → defines an asynchronous function.
// new Promise() → creates a promise.
// Math.random() → generates a random delay.
// setTimeout() → waits for that random amount of time.
// resolve() → fulfills the promise with the confirmation message.
// .then() → receives the resolved message.

//Problem 10
//Using async/await
async function brecoffee(coffeetype) {
    return new Promise((resolve) => {
        const delay = Math.floor(Math.random() * 2000) + 1000;

        setTimeout(() => {
            resolve(`${coffeetype} is ready!`);
        }, delay)
    });
}

async function ordercoffee() {
    const result = await brecoffee("Blackcoffee");
    console.log(result);
}

ordercoffee();

//Problem11
function filterProducts(products, criterion) {
    return products.filter(product => product.category === criterion);
}

// Example
const products = [
    { name: "Laptop", category: "Electronics" },
    { name: "Shirt", category: "Clothing" },
    { name: "Phone", category: "Electronics" },
    { name: "Shoes", category: "Footwear" }
];

const result = filterProducts(products, "Electronics");

console.log(result);
