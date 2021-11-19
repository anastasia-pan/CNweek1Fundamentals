// let ramNumArray = [];
// //populates an array with numbers from 1-50
// for (let i = 1; i < 51; i++) {
//   ramNumArray.push(i);
// }
// //function to generate random numbers and print them
// function generatePrintNum() {
//   //runs a loop 6 times
//   for (let j = 0; j < 6; j++) {
//     // prints the value of a randomly selected index number from ramNumArray
//     console.log(ramNumArray[Math.floor(Math.random() * 49)]);
//   }
// }

// generatePrintNum();

for (i = 0; i < 6; i++) {
  console.log(Math.ceil(Math.random() * 50));
}
