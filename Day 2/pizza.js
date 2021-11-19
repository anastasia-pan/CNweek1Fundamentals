let anyTopping = "Cheese";

switch (anyTopping) {
  case "Cheese":
  case "Tomatoes":
  case "Mushrooms":
    console.log(`${anyTopping} is one of my faves!`);
    break;
  case "Pineapple":
  case "Anchovies":
    console.log(`${anyTopping} should not be on pizza!`);
    break;
  default:
    console.log(`I could eat ${anyTopping} on pizza`);
    break;
}
