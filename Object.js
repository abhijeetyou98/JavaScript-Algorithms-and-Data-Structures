//Build JavaScript Objects
const myDog = {
    // Only change code below this line
  "name":"Muku",
  "legs":4,
  "tails":1,
  "friends":["Seeru", "Muka"]
  
  
    // Only change code above this line
  };
  //Accessing Object Properties with Dot Notation
  // Setup
  const testObj = {
    "hat": "ballcap",
    "shirt": "jersey",
    "shoes": "cleats"
  };
  
  // Only change code below this line
  const hatValue = testObj.hat;      // Change this line
  const shirtValue = testObj.shirt;    // Change this line
  //Accessing Object Properties with Bracket Notation
  // Setup
  const testObj2 = {
    "an entree": "hamburger",
    "my side": "veggies",
    "the drink": "water"
  };
  
  // Only change code below this line
  const entreeValue = testObj["an entree"];   // Change this line
  const drinkValue = testObj["the drink"];    // Change this line
  
  //Accessing Object Properties with Variables
  
  // Setup
  const testObj3 = {
    12: "Namath",
    16: "Montana",
    19: "Unitas"
  };
  
  // Only change code below this line
  const playerNumber = 16;  // Change this line
  const player = testObj[playerNumber];   // Change this line
  
  //Updating Object Properties
// Setup
const myDog4 = {
    "name": "Coder",
    "legs": 4,
    "tails": 1,
    "friends": ["freeCodeCamp Campers"]
  };
  
  // Only change code below this line
  myDog.name =["Happy coder"];

  // Add New Properties to a JavaScript Object
  const myDog = {
    "name": "Happy Coder",
    "legs": 4,
    "tails": 1,
    "friends": ["freeCodeCamp Campers"]
  };
  myDog.bark ="woof";

  //Delete Properties from a JavaScript Object
  // Setup
// Setup
const myDog = {
    "name": "Happy Coder",
    "legs": 4,
    "tails": 1,
    "friends": ["freeCodeCamp Campers"],
    "bark": "woof"
  };
  
  // Only change code below this line
  delete myDog.tails;
  //Using Objects for Lookups
  function phoneticLookup(val) {
    var result = "";
    var lookup = {
      "alpha": "Adams",
      "bravo": "Boston",
      "charlie": "Chicago",
      "delta": "Denver",
      "echo": "Easy",
      "foxtrot": "Frank"
    };
  // After converting our case statements into object properties you can make use of the variable `result` to let the function return the correct value.
  
  
    result = lookup[val];
    // Only change code above this line
    return result;
  }
  //Testing Objects for Properties

  //Iterate Odd Numbers With a For Loop
// Setup
const myArray = [];

// Only change code below this line
for (let i = 1; i < 10; i +=2 ){
  myArray.push(i);
}
console.log(myArray);

//Count Backwards With a For Loop
// Setup
const myArray2 = [];

// Only change code below this line
for (let i = 9; i > 0; i -=2){
  myArray.push(i);
}
console.log(myArray);

//Iterate Through an Array with a For Loop

// Setup
const myArr = [2, 3, 4, 5, 6];

// Only change code below this line
var total = 0;

for (var i = 0; i < myArr.length; i++) {
  total += myArr[i];
}

console.log(total);

//Nesting For Loops
function multiplyAll(arr) {
  let product = 1;
  // Only change code below this line
for (var i=0; i < arr.length; i++) {
    for (var j=0; j < arr[i].length; j++) {
      product *= arr[i][j];
    }
    
  }
  // Only change code above this line
  return product;
}

multiplyAll([[1, 2], [3, 4], [5, 6, 7]]);
//Iterate with JavaScript Do...While Loops
// Setup
const myArray3 = [];
let i = 10;

// Only change code below this line
do  {
  myArray.push(i);
  i++;
}
while (i < 5);
//


  
  
  
  