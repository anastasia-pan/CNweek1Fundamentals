let faveDrinks = ["Coffee", "Coke", "Cream Soda"];
for (let i = 0; i < faveDrinks.length; i++) {
  console.log(faveDrinks[i]);
}

let multiplesTwo = [];
for (let i = 0; i < 20; i++) {
  if (i % 2 == 0) {
    multiplesTwo.push(i);
  }
}
console.log(multiplesTwo);

// random card
let cards = ["Hearts", "Spades", "Diamonds", "Clubs"];
let currentCard = "Clubs";
while (currentCard != "Spades") {
  console.log(currentCard);
  currentCard = cards[Math.floor(Math.random() * 4)];
}
console.log(currentCard);
console.log(Math.floor(Math.random() * 10));
console.log(Math.random() * 10);
console.log(Math.floor(Math.random()));


// let num = Math.random();
// console.log(num);
// let multipliednum  = (num*4)
// console.log(multipliednum)
// let floorversion  = Math.floor(multipliednum)
// console.log(floorversion)

