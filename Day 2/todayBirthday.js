// use Date function to get today's date and my birthday and store it in variables
let today = new Date();
let birthday = new Date("February 2, 1985");
//subtract one date from another, returns seconds
let diff = today - birthday;
// set a new variable, which calculates days from seconds, and rounds it down to day
let daysElapsed = Math.floor(diff / (1000 * 3600 * 24));
//print out
console.log(`It's been ${daysElapsed} since I was born`);
