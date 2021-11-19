const evenOrOdd = (num1, num2) => {
  let sum = num1 + num2;
  let multiplied = num1 * num2;
  if (sum % 2 == 0) {
    console.log(`Sum of these numbers is ${sum}, and is even`);
  } else {
    console.log(
      `Sum of these numbers is not even, here they are multiplied: ${multiplied}`
    );
  }
};

evenOrOdd(2, 7);
