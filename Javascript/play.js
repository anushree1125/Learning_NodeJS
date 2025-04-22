var name = "Max";
console.log(name); // prints on terminal
var age = 29;
var hasHobbies = true;
// global variables
function summarizeUser(userName, userAge, userHasHobby) {
  //scoping
  return (
    "Name is " +
    userName +
    ", Age: " +
    userAge +
    ", Has hobbies: " +
    userHasHobby
  );
}

console.log(summarizeUser(name, age, hasHobbies));
