//an object called coffeeShop, containing objects with menu items and prices
let coffeeShop = {
  branch: "City Centre",
  drinksMenu: {
    coffee: 2,
    tea: 3,
    coke: 2,
    sprite: 2,
  },
  foodMenu: {
    sandwich: 5,
    pasty: 4,
    burger: 8,
    salad: 7,
  },
  //created an order aggregation method, takes rest parameters to make an array out of parameters given
  Order(...order1) {
    // create a list out of all food values
    let allfood = Object.keys(this.foodMenu);
    //create a list out of all drinks values
    let alldrinks = Object.keys(this.drinksMenu);
    //create a list containing all items
    let allitems = [
      ...Object.keys(this.foodMenu),
      ...Object.keys(this.drinksMenu),
    ];

    //create empty list of cost
    let prices = [];
    //create empty list of order items to push valid items into
    let orderList = [];
    // aggregate cost from prices
    let totalCost = 0;

    //create a loop that iterates through the order list and checks if items are contained in the allfood or all drinks list
    for (i = 0; i < order1.length; i++) {
      //assign a variable for each iteration for easier tracking
      let individualItem = order1[i];
      // create an if else statement to check if each order item in food or drink list
      if (allfood.includes(individualItem)) {
        //create a variable for price taken from the object values
        let foodPrice = coffeeShop.foodMenu[individualItem];
        //add item to orderlist
        orderList.push(individualItem);
        //add price to price list
        prices.push(foodPrice);
        // add current price to overall cost
        totalCost += foodPrice;
        //same statement to check for item in drinks list
      } else if (alldrinks.includes(individualItem)) {
        let drinkPrice = coffeeShop.drinksMenu[individualItem];
        orderList.push(individualItem);
        prices.push(drinkPrice);
        totalCost += drinkPrice;
      } else {
        //provide an error for an invalid item and a full food and drink menu to choose from
        console.log(
          `We don't have ${individualItem}, please pick from one of the following: ${allitems}.`
        );
      }
    }
    console.log(`You have ordered the following food:`);
    // create a loop to print out the order and individual prices
    for (i = 0; i < orderList.length; i++) {
      console.log(`A ${orderList[i]}, for £${prices[i]}`);
    }
    //log out overall cost
    console.log(`Your total will be: £${totalCost}`);
  },
};
//call  the method
coffeeShop.Order("coffee", "tea");
coffeeShop.Order("fudge", "coffee");
