const shoppingCart = [{price: 10.99}, {price: 5.99}, {price: 29.99}];

const calculateTotalCost = (cart) => {
  let totalCost = 0;
  cart.forEach((item) => {
    totalCost += item.price;
  });
  return totalCost;
};


const total = calculateTotalCost(shoppingCart);
console.log(`Sum is: $${total.toFixed(2)}`);
