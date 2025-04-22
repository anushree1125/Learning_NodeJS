const name = "Max"; // need not to be changed
let age = 29; //can be changed
const hasHobbies = true;

age = 30;
// name = "Maxmalian"; //----> error
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
