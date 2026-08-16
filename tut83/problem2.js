//Problem 2
//First Method
function doublearrayelement(array) {
    let newarray = [];

    for (let i = 0; i < array.length; i++) {
        let newelement;

        if (i > 0 && array[i] === array[i - 1]) {
            newelement = array[i];
        }
        else {
            newelement = array[i] * 2;
        }
        newarray.push(`${newelement}`);
    }
    return newarray;
}

let array = [1, 2, 3, 3, 4, 4, 5, 66, 71, 99, 10];
console.log(doublearrayelement(array));

//Second Method
// function doublearrayelement(array) {
//     let newarray = [];

//     for (let i = 0; i < array.length; i++) {
//         if (i > 0 && array[i] === array[i - 1]) {
//             newarray.push(array[i]);
//         }
//         else {
//             newarray.push(array[i] * 2);
//         }
//     }
//     return newarray;
// }

// let array = [1, 2, 3, 3, 4, 4, 5, 66, 71, 99, 10];
// console.log(doublearrayelement(array));