let num = 15;
if (num % 5 == 0 || num % 3 == 0) {
  console.log("This number is divisible by 3 or 5");
} else if (num % 5 == 0) {
  console.log("buzz");
} else if (num % 3 == 0) {
  console.log("fizz");
} else {
  console.log(`${num} number is not divisible by 3 or 5`);
}
