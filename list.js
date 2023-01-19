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
function nextInLine(arr, item) {
  // Only change code below this line
  arr.push(item);
  return arr.shift();
  // Only change code above this line
}

// Setup
let testArr = [1, 2, 3, 4, 5];

// Display code
console.log("Before: " + JSON.stringify(testArr));
console.log(nextInLine(testArr, 6));
console.log("After: " + JSON.stringify(testArr));

//Understanding Boolean Values
function welcomeToBooleans() {
  // Only change code below this line

  return true; // Change this line

  // Only change code above this line
}

// Use Conditional Logic with If Statements

function trueOrFalse(wasThatTrue) {
  // Only change code below this line
if (wasThatTrue){
  return "Yes, that was true";
}
{
 return  "No, that was false";
}


  // Only change code above this line

}

//Comparison with the Equality Operator
// Setup
function testEqual(val) {
  if (val==12) { // Change this line
    return "Equal";
  }
  return "Not Equal";
}

testEqual(10);

//Comparison with the Strict Equality Operator
// Setup
function testStrict(val) {
  if (val===7) { // Change this line
    return "Equal";
  }
  return "Not Equal";
}

testStrict(10);

//Practice comparing different values

// Setup
function compareEquality(a, b) {
  if (10 === "10") { // Change this line
    return "Equal";
  }
  return "Not Equal";
}

compareEquality(10, "10");

//Comparison with the Inequality Operator// Setup
function testNotEqual(val) {
  if (val !=99) { // Change this line
    return "Not Equal";
  }
  return "Equal";
}

testNotEqual(10);

//Comparison with the Strict Inequality Operator

// Setup
function testStrictNotEqual(val) {
  if (val !==17) { // Change this line
    return "Not Equal";
  }
  return "Equal";
}

testStrictNotEqual(10);

//Comparison with the Greater Than Operator
function testGreaterThan(val) {
  if (val >100) {  // Change this line
    return "Over 100";
  }

  if (val > 10) {  // Change this line
    return "Over 10";
  }

  return "10 or Under";
}

testGreaterThan(10);

//Comparison with the Greater Than Or Equal To Operator
function testGreaterOrEqual(val) {
  if (val >= 20) {  // Change this line
    return "20 or Over";
  }

  if (val >= 10) {  // Change this line
    return "10 or Over";
  }

  return "Less than 10";
}

testGreaterOrEqual(10);

//Comparison with the Less Than Operator
function testLessThan(val) {
  if (val < 25 ) {  // Change this line
    return "Under 25";
  }

  if (val < 55) {  // Change this line
    return "Under 55";
  }

  return "55 or Over";
}

testLessThan(10);

//Comparison with the Less Than Or Equal To Operator
function testLessOrEqual(val) {
  if (val <= 12) {  // Change this line
    return "Smaller Than or Equal to 12";
  }

  if (val <= 24) {  // Change this line
    return "Smaller Than or Equal to 24";
  }

  return "More Than 24";
}

testLessOrEqual(10);

//Comparisons with the Logical And Operator

function testLogicalAnd(val) {
  // Only change code below this line

  if (val <=  50 && val >=25) {
    
      return "Yes";
 
  }

  // Only change code above this line
  return "No";
}

testLogicalAnd(10);

//Comparisons with the Logical Or Operator
function testLogicalOr(val) {
  // Only change code below this line

  if (val < 10 ||val > 20) {
    return "Outside";
  }

  

  // Only change code above this line
  return "Inside";
}

testLogicalOr(15);

//Introducing Else Statements
function testElse(val) {
  let result = "";
  // Only change code below this line

  if (val > 5) {
    result = "Bigger than 5";
  }

  else  {
    result = "5 or Smaller";
  }

  // Only change code above this line
  return result;
}

testElse(4);

//Introducing Else If Statements
function testElseIf(val) {
  if (val > 10) {
    return "Greater than 10";
  }

  else  if (val < 5) {
    return "Smaller than 5";
  }
else {
  return "Between 5 and 10";
}
  
}

testElseIf(7);

//Logical Order in If Else Statements
 




