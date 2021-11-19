// let weather = "hailing";
// if (weather == "sunny") {
//   console.log("Better wear suncream");
// } else if (weather == "rainy") {
//   console.log("Better take my umbrella!");
// } else {
//   console.log("Hmmm, it could go either way!");
// }

let place = "Manc";
let weather = "Cloudy";
if (place == "Manc" && weather == "Sunny") {
  console.log("Check again");
} else if (
  (place == "Manc" && weather == "Rain") ||
  (place == "Manc" && weather == "Cloudy")
) {
  console.log("Obvs");
} else {
  console.log("What, it isn't raining?");
}
