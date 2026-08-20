//Problem 13
//Method 1
function calculatetotal(products) {
    let total = 0;

    for (let i = 0; i < products.length; i++) {
        total = total + products[i].price * products[i].quantity;
    }
    return total;
}

const cart = [
    { price: 10, quantity: 2 },
    { price: 25, quantity: 1 },
    { price: 5, quantity: 3 },
];

console.log(calculatetotal(cart)); // 60

//Method 2
// function calculateTotal(products) {
//   return products.reduce((total, product) => {
//     return total + product.price * product.quantity;
//   }, 0);
// }

// // Example:
// const cart = [
//   { price: 10, quantity: 2 },
//   { price: 25, quantity: 1 },
//   { price: 5, quantity: 3 }
// ];

// console.log(calculateTotal(cart)); // 70
