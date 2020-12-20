// 01.explore-differences-between-the-var-and-let-keywords
let catName;
let quote;
function catTalk() {
  "use strict";

  catName = "Oliver";
  quote = catName + " says Meow!";
  console.log(quote)
}
catTalk();

// 02-compare-scopes-of-the-var-and-let-keywords
function checkScope() {
    // 'use strict';
    let i = 'function scope';
    if (true) {
      let i = 'block scope';
      console.log('Block scope i is: ', i);
    }
    console.log('Function scope i is: ', i);
    return i;
  }
  checkScope()

// 03-declare-a-read-only-variable-with-the-const-keyword
function printManyTimes(str) {
    "use strict";
    const SENTENCE = str + " is cool!";
    for (let i = 0; i < str.length; i+=2) {
      console.log(SENTENCE);
    }
}
printManyTimes("freeCodeCamp");

// 04-mutate-an-array-declared-with-const
const s = [5, 7, 2];
//change it to [2, 5, 7]
function editInPlace() {
  'use strict';
  s[0] = 2
  s[1] = 5
  s[2] = 7
}
editInPlace();
console.log(s)

// 05-prevent-object-mutation
function freezeObj() {
    'use strict';
    const MATH_CONSTANTS = {
      PI: 3.14
    };
    Object.freeze(MATH_CONSTANTS)
    try {
      MATH_CONSTANTS.PI = 99;
    } catch(ex) {
      console.log(ex);
    }
    return MATH_CONSTANTS.PI;
}
const PI = freezeObj();
//TypeError: Cannot assign to read only property 'PI' of object '#<Object>'

//06-use-arrow-functions-to-write-concise-anonymous-functions
const magic = () => {
    "use strict";
    return new Date();
  }


// 07-write-arrow-functions-with-parameters
const myConcat = (arr1, arr2) => arr1.concat(arr2)
console.log(myConcat([1, 2], [3, 4, 5]));

// 08-set-default-parameters-for-your-functions
const increment = (number, value = 1) => number + value;

// 09-use-the-rest-parameter-with-function-parameters
const sum = (...args) => {
    return args.reduce((a, b) => a + b, 0)
}

const sum = (...args) => {
    console.log(...[...args])
    return args.reduce((a, b) => a + b, 0)
}
sum(1, 2, 3)


// 10
// use-the-spread-operator-to-evaluate-arrays-in-place
const arr1 = ['JAN', 'FEB', 'MAR', 'APR', 'MAY'];
let arr2;
arr2 = [...arr1];  // Change this line
console.log(arr2);


let obj = {
    a: 1,
    b: "ben"
}

let obj2 = {
    ...obj,
    c: "hhh"
}
try {console.log(...obj2)}
catch(e) { console.log(e)} //TypeError: Found non-callable @@iterator
console.log(obj2)


// 11
// use-destructuring-assignment-to-extract-values-from-objects


// 12
// use-destructuring-assignment-to-assign-variables-from-objects
const HIGH_TEMPERATURES = {
    yesterday: 75,
    today: 77,
    tomorrow: 80
};
  
const { 
    today: highToday, 
    tomorrow: highTomorrow 
} = HIGH_TEMPERATURES


// 13
// use-destructuring-assignment-to-assign-variables-from-nested-objects
const LOCAL_FORECAST = {
    yesterday: { low: 61, high: 75 },
    today: { low: 64, high: 77 },
    tomorrow: { low: 68, high: 80 }
};
  
const { today: {
    low: lowToday,
    high: highToday
}} = LOCAL_FORECAST
  
  
// 14
// use-destructuring-assignment-to-assign-variables-from-arrays
let a = 8, b = 6;
//swap the values of a and b
[a, b] = [b, a]

// 15
// use-destructuring-assignment-with-the-rest-parameter-to-reassign-array-elements
const source = [1,2,3,4,5,6,7,8,9,10];
function removeFirstTwo(list) {
  "use strict";
  const [,, ...arr] = list;
  return arr;
}
const arr = removeFirstTwo(source);

// 16
//use-destructuring-assignment-to-pass-an-object-as-a-functions-parameters
const stats = {
    max: 56.78,
    standard_deviation: 4.34,
    median: 34.54,
    mode: 23.87,
    min: -0.75,
    average: 35.85
  };
  
  // Only change code below this line
  const half1 = (stats) => (stats.max + stats.min) / 2.0
  console.log(half1(stats))
  const half = ({max, min}) => (max + min) / 2.0; 
  console.log(half(stats))
// 17
//create-strings-using-template-literals
const result = {
    success: ["max-length", "no-amd", "prefer-arrow-functions"],
    failure: ["no-var", "var-on-top", "linebreak"],
    skipped: ["no-extra-semi", "no-dup-keys"]
  };
  function makeList(arr) {
    const failureItems = []
    arr.forEach(value => {
      let temp = `<li class="text-warning">${value}</li>`
      failureItems.push(temp)
    });
    return failureItems;
  }
  
  const failuresList = makeList(result.failure);
// 18
//write-concise-object-literal-declarations-using-object-property-shorthand
const createPerson = (name, age, gender) => {
    "use strict";
    // Only change code below this line
    return {
      name,
      age,
      gender
    };
    // Only change code above this line
  };
  
// 19
// write-concise-declarative-functions-with-es6
// Only change code below this line
const bicycle = {
    gear: 2,
    setGear(newGear) {
      this.gear = newGear;
    }
  };
  // Only change code above this line
  bicycle.setGear(3);
  console.log(bicycle.gear);
  
// 20
// use-class-syntax-to-define-a-constructor-function
class Vegetable {
  constructor(VegetableName) {
    this.name = VegetableName
  }
}

const carrot = new Vegetable('carrot');
console.log(carrot.name); // Should display 'carrot'

// 21
//use-getters-and-setters-to-control-access-to-an-object
class Thermostat {
  constructor(tem){
    this._temperature = 5/9 * (tem - 32)
  }
  get temperature(){
    return this._temperature
  }
  set temperature(newTem){
    this._temperature = newTem
  }
}
// Only change code above this line

const thermos = new Thermostat(76); // Setting in Fahrenheit scale
let temp = thermos.temperature; // 24.44 in Celsius
thermos.temperature = 26;
temp = thermos.temperature; // 26 in Celsius

// 22
// create-a-module-script

// 23
//use-export-to-share-a-code-block
const uppercaseString = (string) => {
  return string.toUpperCase();
}

const lowercaseString = (string) => {
  return string.toLowerCase()
}

export { uppercaseString, lowercaseString }



// 24
// reuse-javascript-code-using-import
import {uppercaseString, lowercaseString} from './string_functions.js' 

uppercaseString("hello");
lowercaseString("WORLD!");

// 25
// use--to-import-everything-from-a-file
import * as stringFunctions from './string_functions.js'
stringFunctions.uppercaseString("hello");
stringFunctions.lowercaseString("WORLD!");

// 26
// create-an-export-fallback-with-export-default
export default function subtract(x, y) {
  return x - y;
}


// 27
// import-a-default-export
import subtract from "./math_functions.js"  
subtract(7,4);


// 28
// create-a-javascript-promise
const makeServerRequest = new Promise((resolve, reject) => {})


// 29
// complete-a-promise-with-resolve-and-reject
const makeServerRequest = new Promise((resolve, reject) => {
  // responseFromServer represents a response from a server
  let responseFromServer;
    
  if(responseFromServer) {
    resolve("We got the data")
  } else {  
    reject("Data not received")
  }
});

// 30
// handle-a-fulfilled-promise-with-then
const makeServerRequest = new Promise((resolve, reject) => {
  // responseFromServer is set to true to represent a successful response from a server
  let responseFromServer = true;
    
  if(responseFromServer) {
    resolve("We got the data");
  } else {  
    reject("Data not received");
  }
});
makeServerRequest.then(result => console.log(result))

// 31
// handle-a-rejected-promise-with-catch
const makeServerRequest = new Promise((resolve, reject) => {
  // responseFromServer is set to false to represent an unsuccessful response from a server
  let responseFromServer = false;
    
  if(responseFromServer) {
    resolve("We got the data");
  } else {  
    reject("Data not received");
  }
});

makeServerRequest.then(result => {
  console.log(result);
});
makeServerRequest.catch(error => {
  console.log(error)
})

  