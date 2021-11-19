let coffeeOrder = [
  "Alex - Cortado",
  "Ben - Cortado",
  "Charlie - Whatever's New",
];
coffeeOrder[1] = "Ann - Vanilla latte";
console.log(coffeeOrder[1]);
// properties on an array. returns the amount of items
console.log(coffeeOrder.length);
//push adds an item at the end of the list
coffeeOrder.push("Donna - Tchai");
console.log(coffeeOrder);
//.pop removes the last item from an array
coffeeOrder.pop();
console.log(coffeeOrder);
