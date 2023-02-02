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

    //
  
  
  
    
    
    
    