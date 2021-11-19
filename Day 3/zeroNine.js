let countNineArray = [];
//populates an array with numbers from 0-9
for (let i = 0; i < 10; i++) {
  countNineArray.push(i);
}

//reverses array
let reverseArray = countNineArray.reverse();

// loop to print all items in reverse array
for (i = 0; i < reverseArray.length; i++) {
  console.log(reverseArray[i]);
}
