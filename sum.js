const shoppingCart = [{price: 11.99}, {price: 5.99}, {price: 29.99}];

const calculateTotalCost = (cart) => {
  let totalCost = 0;
  cart.forEach((item) => {
    totalCost += item.price;
  });
  return totalCost;
};

const total = calculateTotalCost(shoppingCart);
console.log(`The total cost of the shopping cart is: $${total.toFixed(2)}`);
