const person = {
  name: "Max",
  age: 29,
  greet() {
    console.log("Hi, I am " + this.name);
  },
};
const hobbies = ["Sports", "Cooking"];
// for (let hobby in hobbies) {
//   console.log(hobby);
// }

console.log(hobbies.map((hobby) => "Hobby: " + hobby));
//console.log(hobbies);
hobbies.map((hobby) => console.log("Hobby: " + hobby));

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array#

//https://academind.com/tutorials/reference-vs-primitive-values

// https://academind.com/tutorials/this-keyword-function-references

hobbies.push("coding");
console.log(hobbies);
