// const titactoe =
//   "\n\n      |       |    \n\n      |       |    \n\n      |       |    \n\n_ _ _ _ _ _ _ _ _ _ _\n\n      |       |    \n\n      |       |    \n\n      |       |    \n\n_ _ _ _ _ _ _ _ _ _ _\n\n      |       |    \n\n      |       |    \n\n      |       |    \n\n";

// console.log("\x1b[32m", titactoe);
// console.log("\x1b[0m ");

// var column = "      |       |    ";
// var row = "- - - - - - - - - - -";
// const rows = [
//   column,
//   column,
//   column,
//   row,
//   column,
//   column,
//   column,
//   row,
//   column,
//   column,
//   column,
// ];

// for (let i = 0; i < 11; i++) {
//   console.log(rows[i]);
// }

// const row = [
//   "\n      |       |    \n\n      |       |    \n\n      |       |    \n\n_ _ _ _ _ _ _ _ _ _ _\n",
//   "\n      |       |    \n\n      |       |    \n\n      |       |    \n\n_ _ _ _ _ _ _ _ _ _ _\n",
//   "\n      |       |    \n\n      |       |    \n\n      |       |    \n",
// ];

// for (let i = 0; i < 3; i++) {
//   console.log("\x1b[32m");
//   console.log(row[i]);
// }
// console.log("\x1b[0m ");

var column = "      |       |    \n";
var row = "- - - - - - - - - - - \n";
console.log("\x1b[32m");
for (let i = 0; i < 3; i++) {
  for (let j = 0; j < 3; j++) {
    console.log(column);
  }
  if (i < 2) {
    console.log(row);
  }
}
console.log("\x1b[0m ");
