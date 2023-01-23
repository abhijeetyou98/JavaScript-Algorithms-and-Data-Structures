// Switch
//Selecting from Many Options with Switch Statements

function caseInSwitch(val) {
    let answer = "";
    // Only change code below this line
  switch (val){
    case 1:
    answer ="alpha";
    break
  }switch (val){
    case 2:
    answer ="beta";
    break
  }switch (val){
    case 3:
    answer ="gamma";
    break
  }
  switch (val){
    case 4:
    answer ="delta";
    break
  }
  
  
    // Only change code above this line
    return answer;
  }
  
  caseInSwitch(1);

  //Adding a Default Option in Switch Statements
  function switchOfStuff(val) {
    let answer = "";
    // Only change code below this line
  switch(val){
    case "a":
   answer = "apple";
    break; 
    case "b":
    answer ="bird";
    break;
     case "c":
    answer ="cat";
    break; 
    default:
    answer ="stuff";
    break;
  }
  
  
    // Only change code above this line
    return answer;
  }
  
  switchOfStuff(1);

  //Multiple Identical Options in Switch Statements
  function sequentialSizes(val) {
    let answer = "";
    // Only change code below this line
  switch (val) {
    case 1:
    case 2:
    case 3:
      answer = "Low";
      break;
     case 4:
     case 5:
     case 6:
      answer = "Mid";
  break;
     case 7:
     case 8:
     case 9:
      answer = "High";
  break;
  }
    // Only change code above this line
    return answer;
  }
  
  sequentialSizes(1);
  //Replacing If Else Chains with Switch
  function chainToSwitch(val) {
    let answer = "";
    // Only change code below this line
  
    switch(val) {
      case "bob":
      answer = "Marley";
      break;
      case 42:
      answer = "The Answer";
      break; 
      case 1:
      answer = "There is no #1";
      break;
      case 99:
      answer = "Missed me by this much!";
      break;
      case 7:
      answer = "Ate Nine";
      break;
      case "John":
      answer = "";
      break;
      case "156":
      answer = "";
      break;
    }
    
    // Only change code above this line
    return answer;
  }
  
  chainToSwitch(7);

  //Returning Boolean Values from Functions

  function isLess(a, b) {
    // Only change code below this line
    return a < b;
    // Only change code above this line
  }
  
  isLess(10, 15);

  //Return Early Pattern for Functions
// Setup
function abTest(a, b) {
  // Only change code below this line
if ( a < 0 || b < 0){
return undefined;
}


  // Only change code above this line

  return Math.round(Math.pow(Math.sqrt(a) + Math.sqrt(b), 2));
}

abTest(2,2);
//Counting Cards
let count = 0;

function cc(card) {
  // Only change code below this line

  switch(card) {
    case 2:
    case 3:
    case 4:
    case 5:
    case 6:
      count++;
      break;
    case 10:
    case "J":
    case "Q":
    case "K":
    case "A":
      count--;
      break;
  }

  var holdbet = 'Hold'
  if (count > 0) {
    holdbet = 'Bet'
  
}
  return count + " " + holdbet;



  
  // Only change code above this line
}

cc(2); cc(3); cc(7); cc('K'); cc('A');

//Build JavaScript Objects
const myDog = {
  // Only change code below this line
"name":"Muku",
"legs":4,
"tails":1,
"friends":["Seeru", "Muka"]


  // Only change code above this line
};


