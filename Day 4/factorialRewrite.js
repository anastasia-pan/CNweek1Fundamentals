const factorial = (n) => {
  if (n === 0 || n === 1) {
    return 1;
  } else {
    return n * factorial(n - 1);
  }
};
console.log(factorial(33));

let orderCount = 0;
const takeOrder = (topping, size) => {
  console.log(
    `One ${size}, pizza with ${topping}, order number ${orderCount + 1}`
  );
  orderCount++;
};

takeOrder("pineapple", "large");
takeOrder("ham", "small");
