//Use Destructuring Assignment to Extract Values from Objects
const HIGH_TEMPERATURES = {
    yesterday: 75,
    today: 77,
    tomorrow: 80
  };
  
  // Only change code below this line
  
  const { today, tomorrow }= HIGH_TEMPERATURES;
  
  
  // Only change code above this line
  
  
  //Use Destructuring Assignment to Assign Variables from Objects
  const HIGH_TEMPERATURES1 = {
    yesterday: 75,
    today: 77,
    tomorrow: 80
  };
  
  // Only change code below this line
    
  const {today:highToday,tomorrow:highTomorrow} = HIGH_TEMPERATURES; 
  
  // Only change code above this line
  //Create Strings using Template Literals
  const result = {
    success: ["max-length", "no-amd", "prefer-arrow-functions"],
    failure: ["no-var", "var-on-top", "linebreak"],
    skipped: ["no-extra-semi", "no-dup-keys"]
  };
  function makeList(arr) {
    // Only change code below this line
  const failureItems = [];
    for (let i = 0; i < arr.length; i++) {
      failureItems.push(`<li class="text-warning">${arr[i]}</li>`);
    }  // Only change code above this line
  
    return failureItems;
  }
  
  const failuresList = makeList(result.failure);

  //Write Concise Object Literal Declarations Using Object Property Shorthand

  const createPerson = (name, age, gender) => 
  // Only change code below this line
 ({
     name,
     age,
     gender
  });
  // Only change code above this line


  //Write Concise Declarative Functions with ES6
// Only change code below this line
const bicycle = {
  gear: 2,
  setGear (newGear) {
    this.gear = newGear;
  }
};
// Only change code above this line
bicycle.setGear(3);
console.log(bicycle.gear);

//Use class Syntax to Define a Constructor Function



//Use getters and setters to Control Access to an Object
class Thermostat {
  constructor(fahrenheit) {
    this._fahrenheit = fahrenheit;
  }
  
  get temperature() {
    return (5 / 9) * (this._fahrenheit - 32);
  }
  
  set temperature(celsius) {
    this._fahrenheit = (celsius * 9.0) / 5 + 32;
  }
}
//
// Explicit constructor
class SpaceShuttle {
  constructor(targetPlanet) {
    this.targetPlanet = targetPlanet;
  }
  takeOff() {
    console.log("To " + this.targetPlanet + "!");
  }
}

// Implicit constructor 
class Rocket {
  launch() {
    console.log("To the moon!");
  }
}

//Create a Module Script


const zeus = new SpaceShuttle('Jupiter');
// prints To Jupiter! in console
zeus.takeOff();

const atlas = new Rocket();
// prints To the moon! in console
atlas.launch();
