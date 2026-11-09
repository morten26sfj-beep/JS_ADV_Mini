// Store the products sold by Alva's Market.
const products = [
  { name: "Smartphone", price: 800, category: "electronics" },
  { name: "Headphones", price: 150, category: "electronics" },
  { name: "Coffee Maker", price: 100, category: "home appliances" },
  { name: "Blender", price: 250, category: "home appliances" },
  { name: "Laptop", price: 1200, category: "electronics" },
  { name: "T-shirt", price: 50, category: "clothing" },
  { name: "Sneakers", price: 300, category: "clothing" }
];

// Find products that cost less than 200.
const productsUnder200 = products.filter(product => product.price < 200);

// Get the names of all products.
const productNames = products.map(product => product.name);

// Find electronic products and get their names.
const electronicsProductNames = products
  .filter(product => product.category === "electronics")
  .map(product => product.name);

// Check whether any product costs 1000 or more.
const hasProductAtLeast1000 = products.some(product => product.price >= 1000);

// Calculate the total cost of all products.
const totalProductCost = products.reduce((total, product) => total + product.price, 0);

// Find the page element where the results will appear.
const results = document.querySelector("#results");

// Display all the results on the page.
results.innerHTML = `
  <section>
    <h2>Products under 200</h2>
    <ul>${productsUnder200.map(product => `<li>${product.name} — $${product.price}</li>`).join("") || "<li>None</li>"}</ul>
  </section>
  <section>
    <h2>All product names</h2>
    <ul>${productNames.map(name => `<li>${name}</li>`).join("")}</ul>
  </section>
  <section>
    <h2>Electronics</h2>
    <ul>${electronicsProductNames.map(name => `<li>${name}</li>`).join("")}</ul>
  </section>
  <section>
    <h2>Any product costs 1000 or more?</h2>
    <p>${hasProductAtLeast1000}</p>
  </section>
  <section>
    <h2>Total cost</h2>
    <p>$${totalProductCost}</p>
  </section>
`;
