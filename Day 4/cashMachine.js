const ATM = (requestedAmount, PINEntered) => {
  //setting balance and correct PIN variables to check against
  let balance = 1000;
  let correctPIN = 1945;

  //function to check balance and return true or false
  const balanceCheck = () => {
    if (requestedAmount <= balance) {
      return true;
    } else {
      return false;
    }
  };
  // taking balance check boolean and assigning to variable
  let permissionToWithdrawAmount = balanceCheck();

  //function to check PIN entered against correct PIN and return boolean
  const pinCheck = () => {
    if (PINEntered == correctPIN) {
      return true;
    } else {
      return false;
    }
  };
  // assigning the result of that function to a variable
  let isPINCorrect = pinCheck();

  //function to check all elements are ok to withdraw, print out message and update balance
  const withdrawing = () => {
    if (permissionToWithdrawAmount == true && isPINCorrect == true) {
      balance -= requestedAmount;
      console.log(
        `Here is £${requestedAmount}, your balance now is £${balance}`
      );
    } else if (permissionToWithdrawAmount == true && isPINCorrect == false) {
      console.log("Your PIN is incorrect please try again");
    } else if (permissionToWithdrawAmount == false && isPINCorrect == true) {
      console.log("Insufficient funds");
    } else {
      console.log("Wrong PIN, please try again");
    }
  };

  withdrawing();
};
//calling function with appropriate arguments
ATM(1005, 1945);
