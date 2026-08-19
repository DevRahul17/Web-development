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