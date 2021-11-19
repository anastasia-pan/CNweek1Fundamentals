let bobFollowers = ["Hannah", "Kieran", "David", "Sarah"];
let annaFollowers = ["John", "Felix", "Elizabeth", "Kieran"];

for (let i = 0; i < bobFollowers.length; i++) {
  for (let j = 0; j < annaFollowers.length; j++) {
    if (bobFollowers[i] == annaFollowers[j]) {
      console.log(`${bobFollowers[i]} follows both Bob and Anna!`);
    } else {
    }
  }
}
