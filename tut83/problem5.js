//Problem 5
let array = [1, 2, 3, 4, 5, 6, -1, 10, 7];

function sumuntilnegative(array) {
    let sum = 0;

    for (let i = 0; i < array.length; i++) {
        if (array[i] < 0) {
            break;
        }
        else {
            sum = sum + array[i];
        }
    }
    return sum;
}

console.log(sumuntilnegative(array));