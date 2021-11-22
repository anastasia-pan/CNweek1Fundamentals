let coffeeShop = {
  branch: "City Centre",
  drinksMenu: {
    coffee: 2,
    tea: 3,
  },
  foodMenu: {
    sandwich: 5,
    pasty: 4,
  },
  makeMeAList() {
    let allThings =
      (Object.keys(coffeeShop.drinksMenu), Object.keys(coffeeShop.foodMenu));
    console.log(allThings);
  },

  foodOrdered() {
    let allitems =
      (Object.keys(coffeeShop.drinksMenu), Object.keys(coffeeShop.foodMenu));
    let order1 = ["food", "bread", "food"];
    let prices = [];
    let foodsList = [];
    let totalCost = 0;

    for (i = 0; i < order1.length; i++) {
      let itemname = order1[i];
      if (allitems.includes(itemname)) {
        console.log(itemname);
        let price = coffeeShop.foodMenu[itemname];
        foodsList.push(itemname);
        prices.push(price);
        console.log(prices);
        console.log(foodsList);
        totalCost += price;
      } else {
        console.log(
          `We don't have that, please pick from one of the following: ${allitems}.`
        );
      }
    }
    console.log(`You have ordered the following food:`);
    for (i = 0; i < foodsList.length; i++) {
      console.log(`a ${foodsList[i]}, for £${prices[i]}`);
    }
    console.log(`Your total will be: £${totalCost}`);
  },

  // let totalCost = 0;
  // for (foodIndex in order1) {
  //   foodName
  //   // if (this.foodMenu.includes(food)) {
  //   totalCost += this.foodMenu[food];
  //   order.push(food);
  //   console.log(totalCost);
  //   console.log(order);
  //   // }
};
// coffeeShop.foodOrdered();

// coffeeShop.populate();
coffeeShop.makeMeAList();
// coffeeShop.foodOrdered();
// let food1 = "coffee";

// if ("coffee" in coffeeShop.drink) {
//   console.log(coffeeShop.drink.coffee);
// } else {
//   console.log("false");
// }

// if (coffeeShop.hasOwnProperty(food1) === true) {
//   console.log(coffeeShop.food1);
// }

// for (foodIndex in order1) {
//   foodName
//   // if (this.foodMenu.includes(food)) {
//   totalCost += this.foodMenu[food];
//   order.push(food);
//   console.log(totalCost);
//   console.log(order);
