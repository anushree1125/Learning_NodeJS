const name = "Max";
let age = 29;
const hasHobbies = true;

//Storing anonymous function in named constant
// const summarizeUser = function (userName, userAge, userHasHobby) {
//   return (
//     "Name is " +
//     userName +
//     ", Age: " +
//     userAge +
//     ", Has hobbies: " +
//     userHasHobby
//   );
// };

// arrow function: shorter, this keyword can be used
const summarizeUser = (userName, userAge, userHasHobby) => {
  return (
    "Name is " +
    userName +
    ", Age: " +
    userAge +
    ", Has hobbies: " +
    userHasHobby
  );
};

// const add = (a, b) => {
//   return a + b;
// };

//single statement
const add = (a, b) => a + b;
const addOne = (a) => a + 1; // paranthesis not needed for one arg
const addRandom = () => 1 + 2;

console.log(add(1, 3));
console.log(summarizeUser(name, age, hasHobbies));
console.log(addOne(1));
console.log(addRandom());
