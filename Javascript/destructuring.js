const person = {
  name: "Max",
  age: 29,
  greet() {
    console.log("Hi, I am " + this.name);
  },
};

// const printName = (personData) => {
//   console.log(personData.name);
// };
// printName(person);

//object destructing

const print = ({ name }) => {
  console.log(name);
};
print(person);

const { name, age } = person;
console.log(name, age);

const hobbies = ["sports", "cooking"];
const [hobby1, hobby2] = hobbies;
console.log(hobby1, hobby2);
