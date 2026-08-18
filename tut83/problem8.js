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