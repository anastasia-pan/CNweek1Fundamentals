let ramnum;
function generateAndModulus() {
  for (let i = 0; i < 6; i++) {
    ramnum = Math.ceil(Math.random() * 30);
    if (ramnum % 7 == 0) {
      console.log(`${ramnum} is divisible by 7`);
    } else {
      console.log(`${ramnum} is not divisible by 7`);
    }
  }
}
generateAndModulus();
