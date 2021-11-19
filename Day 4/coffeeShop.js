const coffeeShop = {
  drink: {
    coffee: 2,
    tea: 3,
  },
  sandwich: 5,
  pasty: 4,
  takeOrder() {
    let order1 = "coffee";
    let drinkorder = [];
    drinkorder.push(order1);
    console.log(drinkorder);
  },
};
coffeeShop.takeOrder();

// let food1 = "coffee";

// if ("coffee" in coffeeShop.drink) {
//   console.log(coffeeShop.drink.coffee);
// } else {
//   console.log("false");
// }

// if (coffeeShop.hasOwnProperty(food1) === true) {
//   console.log(coffeeShop.food1);
// }
