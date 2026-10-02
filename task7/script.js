
let products = [
  { name: "Laptop", price: 1200, rating: 5 },
  { name: "Headphones", price: 80, rating: 4 },
  { name: "Mouse", price: 25, rating: 3 },
  { name: "Keyboard", price: 60, rating: 2 },
  { name: "Monitor", price: 300, rating: 4 },
  { name: "Webcam", price: 45, rating: 1 }
];

let home = document.getElementById("home");

products.forEach(function (product) {
  let stars = "⭐".repeat(product.rating);
  console.log(`${product.name}: ${stars}`);

  if (product.rating > 3) {
       home.innerHTML += `<div>${product.name}: $${product.price} - ${stars}</div>`;
  }
});
