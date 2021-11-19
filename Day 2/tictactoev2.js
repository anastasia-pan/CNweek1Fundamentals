function randomXorO() {
  let myArray = ["x", "o"];
  return (randomXOresult = myArray[Math.floor(Math.random() * myArray.length)]);
}
// function makespace() {
//   for (let i = 0; i < 9; i++) {
//     space(i + 1) = randomXorO();
//   }
// }

// console.log(makespace());

let space1 = randomXorO();
let space2 = randomXorO();
let space3 = randomXorO();
let space4 = randomXorO();
let space5 = randomXorO();
let space6 = randomXorO();
let space7 = randomXorO();
let space8 = randomXorO();
let space9 = randomXorO();

function printGrid() {
  console.log(`      |       |     `);
  console.log(` ${space1}    |   ${space2}   | ${space3}   `);
  console.log(`      |       |     `);
  console.log(`_ _ _ _ _ _ _ _ _ _ _`);
  console.log(`      |       |     `);
  console.log(` ${space4}    |   ${space5}   | ${space6}   `);
  console.log(`      |       |     `);
  console.log(`_ _ _ _ _ _ _ _ _ _ _`);
  console.log(`      |       |     `);
  console.log(` ${space7}    |   ${space8}   | ${space9}   `);
  console.log(`      |       |     `);
}
printGrid();
