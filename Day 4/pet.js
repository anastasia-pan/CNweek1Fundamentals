const pet = {
  name: "Foxy",
  typeofPet: "Cat",
  age: 6,
  colour: "orange",
  eat() {
    console.log(`${this.name} is eating`);
  },
  drink() {
    console.log(`${this.name} is drinking`);
  },
};
pet.eat();
pet.drink();
