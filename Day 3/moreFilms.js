let faveFilms = [
  "The Goonies",
  "Jurassic Park",
  "Ghostbusters",
  "Pan's Labyrinth",
];

for (let i = 0; i < faveFilms.length; i++) {
  console.log(faveFilms[i]);
  if (i == 2) {
    if (faveFilms[2] == "Ghostbusters") {
      console.log("Yay,it's Ghostbusters!");
    } else {
      console.log("Boo, we want Ghostbusters!");
    }
  }
}

// if (faveFilms[2] == "Ghostbusters") {
//   console.log("Yay,it's Ghostbusters!");
// } else {
//   console.log("Boo, we want Ghostbusters!");
// }
