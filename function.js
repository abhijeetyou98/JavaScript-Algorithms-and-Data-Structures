function lookUpProfile(name, prop) {
    // Only change code below this line
  for (let i = 0; i < contacts.length; i++) {
      if (contacts[i].firstName === name) {
        if (prop in contacts[i]) {
          return contacts[i][prop];
        } else {
          return "No such property";
        }
      }
    }
    return "No such contact";
    // Only change code above this line
  }
  
  lookUpProfile("Akira", "likes");
  
  //Generate Random Fractions with JavaScript
  function randomFraction() {
  
    // Only change code below this line
  
    return Math.random();;
  
    // Only change code above this line
  }
  console.log(Math.random());
  //Generate Random Whole Numbers with JavaScript
  function randomWholeNum() {
  
    // Only change code below this line
  
    return Math.floor(Math.random() * 10);
  }
  console.log(Math.floor(Math.random() * 10))
  //Generate Random Whole Numbers within a Range

  //Use the parseInt Function
  function convertToInteger(str) {
    return parseInt(str);
    }
    
    convertToInteger("56");

    //Use the parseInt Function with a Radix

    function convertToInteger(str) {
        return parseInt(str, 2)
        }
        
        convertToInteger("10011");
//Use the Conditional (Ternary) Operator
function checkEqual(a, b) {
    return a===b? "Equal":"Not Equal";
   }
   checkEqual(1, 2);
   
   //Use Multiple Conditional (Ternary) Operators
   function checkSign(num) {
    return (num > 0) ? "positive" 
     : (num < 0) ? "negative" 
     : "zero";
 
 }
 
 checkSign(10);
 //Use Recursion to Create a Countdown
// Only change code below this line
function countdown(n) {
  if (n < 1) {
    return [];
  } else {
    const arr = countdown(n - 1);
    arr.unshift(n);
    return arr;
  }
}
console.log(countdown(5));

// Only change code above this line
//Use Recursion to Create a Range of Numbers
function rangeOfNumbers(startNum, endNum) {
    if (endNum < startNum) {
      return [];
    } else {
      const numbers = rangeOfNumbers(startNum, endNum - 1);
      numbers.push(endNum);
      return numbers;
    }
  }
  
  
  
    
    
    
    