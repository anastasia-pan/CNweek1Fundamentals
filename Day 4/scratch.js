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
  aggregate() {
    let allItems = [
      ...Object.keys(this.drinksMenu),
      ...Object.keys(this.foodMenu),
    ];
    console.log(allItems);
  },
};
coffeeShop.aggregate();
