//Compare Scopes of the var and let Keywords
function checkScope() {
    "use strict";
    let i = "function scope";
    if (true) {
      let i = "block scope";
      console.log("Block scope i is: ", i);
    }
    console.log("Function scope i is: ", i);
    return i;
  }

  //Mutate an Array Declared with const

  const s = [5, 7, 2];
function editInPlace() {
  // Only change code below this line
"use strict";
  s[0] = 2;
  s[1] = 5;
  s[2] = 7;
  // Using s = [2, 5, 7] would be invalid

  // Only change code above this line
}
editInPlace();

//Prevent Object Mutation
function freezeObj() {
  const MATH_CONSTANTS = {
    PI: 3.14
  };
  // Only change code below this line

Object.freeze(MATH_CONSTANTS)
  // Only change code above this line
  try {
    MATH_CONSTANTS.PI = 99;
  } catch(ex) {
    console.log(ex);
  }
  return MATH_CONSTANTS.PI;
}
const PI = freezeObj();

//

