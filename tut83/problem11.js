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