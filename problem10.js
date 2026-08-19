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