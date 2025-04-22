const person = {
  name: "Max",
  age: 29,
  //   greet: () => {
  //     // refers to global
  //     console.log("Hi I am " + this.name);
  //   },
  greet: function () {
    console.log("Hi, I am " + this.name);
  },

  greet1() {
    console.log("Hi, I am" + this.name);
  },
};
console.log(person);
person.greet();
