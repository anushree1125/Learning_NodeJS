const hobbies = ["sports", "cooking"];

//copying array
const copiedArray = hobbies.slice();
console.log(copiedArray);

const copiedArray2 = [hobbies];
console.log(copiedArray2); //nested array

//spread operator: elements are pulled out and added to array
const copiedArray3 = [...hobbies];
console.log(copiedArray3);

const person = {
  name: "Max",
  age: 29,
  greet() {
    console.log("Hi, I am " + this.name);
  },
};
const copiedPerson = { ...person };
console.log(copiedPerson);

//not flexible works for only 3 arguments
const toArray = (arg1, arg2, arg3) => {
  return [arg1, arg2, arg3];
};
console.log(toArray(1, 2, 3, 4));

// spread: used to pull data,element function of object
//rest operator: using it to merge multiple arguments into array
const toArray2 = (...args) => {
  return args;
};
console.log(toArray2(1, 2, 3, 4));
