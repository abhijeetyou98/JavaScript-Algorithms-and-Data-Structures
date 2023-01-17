//Shopping List
const myList = [["i-pnone",1],["i-pnone13",13],["i-pnoneX",10],["Mac",23,"Kit"],["i-pnone14",14]];

//Write Reusable JavaScript with Functions
function reusableFunction (){
    console.log("Hi World");
  }
  reusableFunction();
  
  //Passing Values to Functions with Arguments

  function functionWithArgs (a,b){
    console.log(a+b);
    }
    functionWithArgs(1,2);

  //Return a Value from a Function with Return
    function timesFive(num){
      return num*5;
    } 
    const answer = timesFive(5);
// Global Scope and Functions
// Declare the myGlobal variable below this line


function fun1() {
  // Assign 5 to oopsGlobal Here
oopsGlobal=5;
}
let myGlobal;
myGlobal=10;

// Only change code above this line

function fun2() {
  var output = "";
  if (typeof myGlobal != "undefined") {
    output += "myGlobal: " + myGlobal;
  }
  if (typeof oopsGlobal != "undefined") {
    output += " oopsGlobal: " + oopsGlobal;
  }
  console.log(output);
}

//Local Scope and Functions
function myLocalScope() {
  // Only change code below this line
const myVar="Hi";
  console.log('inside myLocalScope', myVar);
}
myLocalScope();

// Run and check the console

G//lobal vs. Local Scope in Functions
// Setup
const outerWear = "T-Shirt";

function myOutfit() {
  // Only change code below this line
const outerWear = "sweater";
  // Only change code above this line
  return outerWear;
}

myOutfit();



//Understanding Undefined Value returned from a Function
// Setup
let sum = 0;

function addThree() {
  sum = sum + 3;
}

// Only change code below this line
function addFive(){
  sum = sum + 5;
}

// Only change code above this line

addThree();
addFive();

//Assignment with a Returned Value

// Setup
let processed = 0;

function processArg(num) {
  return (num + 3) / 5;
}

// Only change code below this line
processed = processArg(7);


//Stand in Line


