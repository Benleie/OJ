


/* 
function titleCase(str) {
  let strArr = []
  for(let item of str.toLowerCase().split(' ')) {
    strArr.push(item.charAt(0).toUpperCase() + item.substring(1))
  }
  return strArr.join(' ');
}

titleCase("I'm a little tea pot");
// console.log(titleCase("I'm a little tea pot"))
*/



/* 
function booWho(bool) {
  return (bool === true || bool === false)
  ? true
  : false;
}

booWho(null);
console.log('abc')
*/




/* function findElement(arr, func) {
  // return arr.find(func);
  for(let i = 0; i < arr.length - 1; i++) {
    if(func(arr[i]))
      return arr[i]
  }
}

findElement([1, 2, 3, 4], num => num % 2 === 0); */



/* function truncateString(str, num) {
  return str.length > num
  ? str.substring(0, num) + '...'
  : str
}

truncateString("A-tisket a-tasket A green and yellow basket", 8);
 */

function repeatStringNumTimes(str, num) {
  if(Math.floor(num) < 1) 
    return ''
  let retStr = ''
  for(let i = 0; i < Math.floor(num); i++){
    retStr += str
  }
  return retStr;
}

repeatStringNumTimes("abc", 3);



/* function confirmEnding(str, target) {
  return str.substring(str.length - target.length) === target;
}

confirmEnding("Bastian", "n"); */



/* function largestOfFour(arr) {
  let returnArr = []
  arr.forEach(item => {
    returnArr.push(Math.max(...item))
  })
  return returnArr;
}

largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]); */



/* function findLongestWordLength(str) {
  let maxNum = 0;
  str.split(' ').forEach(item => {
    if(item.length > maxNum) maxNum = item.length
  })
  return maxNum;
}

findLongestWordLength("The quick brown fox jumped over the lazy dog");
 */



/* 
function factorialize(num) {
  if(num === 1 || num === 0) return 1
  return num * factorialize(num - 1);
}

factorialize(5);
 */



/* function reverseString(str) {
  return str.split('').reverse().join('');
}

reverseString("hello"); */



/* **********************************************************************  */


/* 
function frankenSplice(arr1, arr2, n) {
  let arr = arr2.slice()
  arr.splice(n, 0, ...arr1)
  return arr;
}

frankenSplice([1, 2, 3], [4, 5, 6], 1);

console.log(Boolean({})) 
*/



/* function bouncer(arr) {
  return arr.filter(item => Boolean(item));
}

bouncer([7, "ate", "", false, 9]); */


/* 
function getIndexToIns(arr, num) {
  //从小到大进行排序
  arr.sort((a, b) => {
    if(a < b) {
      return -2
    }
  })
  for(let index in arr) {
    if(arr[index] >= Math.ceil(num)) {
      return Number(index)
    }
  }
  return arr.length
}

getIndexToIns([40, 60], 50);
// console.log(getIndexToIns([10, 20, 30, 40, 50], 35)) 
*/

/* 
// 使用arr.includes()
function mutation(arr) {
  let sss = arr[0].toLowerCase().split('')
  for(let item of arr[1].toLowerCase().split('')) {
    if(!sss.includes(item))
     return false
  }
  return true;
}

mutation(["hello", "hey"]);
// console.log(mutation(["hello", "he"])) */



/* 
function chunkArrayInGroups(arr, size) {
  let returnArr = []
  for(let start = 0; start < arr.length; start += size) {
    returnArr.push(arr.slice(start, start + size))
  }
  return returnArr;
}

chunkArrayInGroups(["a", "b", "c", "d"], 2);
console.log(chunkArrayInGroups(["a", "b", "c", "d"], 2))
 */




/* *************************** Basic Data Structures **************************** */

/* 
let yourArray = ['sister', 3, true, undefined, null, [1, 2, 3]]
let newArray
newArray = [...yourArray]
newArray = yourArray.slice()
newArray = yourArray.concat()
console.log(newArray)
console.log(newArray.indexOf(4))
console.log('-1')
// 使用 spread operator拼接数组更灵活，更直观
*/


function filteredArray(arr, elem) {
  let newArr = [];
  // Only change code below this line
  for(let item of arr) {
    if(item.indexOf(elem) === -1) {
      newArr.push(item)
    }
  }
  // Only change code above this line
  return newArr;
}
filteredArray([[10, 8, 3], [14, 6, 23], [3, 18, 6]], 18)

// delete obj.prop

let users = {
  Alan: {
    age: 27,
    online: true
  },
  Jeff: {
    age: 32,
    online: true
  },
  Sarah: {
    age: 48,
    online: true
  },
  Ryan: {
    age: 19,
    online: true
  }
};

function isEveryoneHere(obj) {
  // Only change code below this line
  const names = ['Alan', 'Jeff', 'Sarah', 'Ryan' ]
  for(let item of names) {
    if(!(item in obj)) {
      return false
    }
  }
  return true
  // Only change code above this line
}

delete users.Jeff
// console.log(isEveryoneHere(users));


function countOnline(usersObj) {
  // Only change code below this line
  let count = 0;
  for (let key in usersObj) {
    if(usersObj[key].online) {
      count ++
    }
  }
  return count
  // Only change code above this line
}



/*********************************** Data Structure *********************************************/  
// typed-arrays

// create-a-stack-class
function Stack() {
  var collection = [];
  this.print = function() {
    console.log(collection);
  };
  this.push = function(item) {
    collection.push(item);
  }
  this.pop = () => {
    return collection.pop()
  }
  this.peek = () => collection[collection.length - 1]
  this.isEmpty = () => collection.length ? false : true
  this.clear = () => collection = []
  // Only change code below this line

  // Only change code above this line
}

function Queue() {
  var collection = [];
  this.print = function() {
    console.log(collection);
  };
  // Only change code below this line
  this.enqueue = (item) => { collection.push(item)  }
  this.dequeue = () => collection.shift() 
  this.front = () => collection[0]
  this.size = () => collection.length
  this.isEmpty = () => collection.length ? false : true
  // Only change code above this line
}

function PriorityQueue () {
  this.collection = [];
  this.printCollection = function() {
    console.log(this.collection);
  };
  // Only change code below this line
  this.enqueue = (item) => {
    
    // 将每个值按照从小到大的顺序插入有序数组
    let isAdd = false
    for(let i = 0; i < this.collection.length; i++) {
      if(item[1] < this.collection[i][1]) {
        this.collection.splice(i, 0, item);
        isAdd = true
        break;
      }
    }
    // 如果优先级低于所有值，则在此处插入
    if(!isAdd) {
      this.collection.push(item)
    }
      
  }
  this.dequeue = () => this.collection.shift()[0] 
  this.front = () => this.collection[0][0]
  this.size = () => this.collection.length
  this.isEmpty = () => this.collection.length ? false : true
  // Only change code above this line
}

// let myPQ = new PriorityQueue()
// myPQ.enqueue(['11', 11])
// myPQ.enqueue(['1first', 1])
// myPQ.printCollection()
// // console.log(myPQ.dequeue())
// console.log(myPQ.front())
// console.log(myPQ.size())


class Set1 {
  constructor() {
    // Dictionary will hold the items of our set
    this.dictionary = {};
    this.length = 0;
  }

  // This method will check for the presence of an element and return true or false
  has(element) {
    return this.dictionary[element] !== undefined;
  }

  console() {
    console.log(this.dictionary)
  }

  // This method will return all the values in the set
  values() {
    return Object.values(this.dictionary);
  }

  // Only change code below this line
  add(element) {
    if(this.dictionary[element]) {
      return false
    } else {
      this.dictionary[element] = element;
      return true;
    }
  }

  remove(element) {
    if(this.dictionary[element]) {
      delete this.dictionary[element];
      return true;
    } else {
      return false;
    }
  }
  // Only change code above this line
  size() {
    return Object.keys(this.dictionary).length
  }
}

// let mySet = new Set()
// mySet.add(2)
// mySet.add(3)
// mySet.console()


// perform-a-union-on-two-sets
class Set {
  constructor() {
    // This will hold the set
    this.dictionary = {};
    this.length = 0;
  }
  // This method will check for the presence of an element and return true or false
  has(element) {
    return this.dictionary[element] !== undefined;
  }
  // This method will return all the values in the set
  values() {
    return Object.keys(this.dictionary);
  }
  // This method will add an element to the set
  add(element) {
    if (!this.has(element)) {
      this.dictionary[element] = true;
      this.length++;
      return true;
    }
    return false;
  }
  // This method will remove an element from a set
  remove(element) {
    if (this.has(element)) {
      delete this.dictionary[element];
      this.length--;
      return true;
    }
    return false;
  }
  // This method will return the size of the set
  size() {
    return this.length;
  }
  // params: Set, return: Set
  union(set) {
    const newSet = new Set();
    this.values().forEach(item => {
      newSet.add(item)
    })
    set.values().forEach(item => {
      newSet.add(item)
    })
    return newSet
  }
  intersection(set) {
    const newSet = new Set();
    this.values().forEach(item => {
      if(set.values().indexOf(item) !== -1) {
        newSet.add(item)
      }
    })
    return newSet
  }

  // 注意不是完全意义上的差集
  difference(set) {
    const newSet = new Set();
    const interSet = this.intersection(set)
    // set.values().forEach(item => {
    //   if(!interSet.dictionary[item]) {
    //     newSet.add(item)
    //   }
    // })
    this.values().forEach(item => {
      if(!interSet.dictionary[item]) {
        newSet.add(item)
      }
    })
    return newSet
  }

  isSubsetOf(set) {
    // for(let item of Object.keys(this.dictionary)) {
    //   if(!set.dictionary[item]) {
    //     return false
    //   }
    // }
    // return true
    return Object.keys(this.dictionary).every(item => {
      return set.dictionary[item]
    })
  }

  // Only change code above this line
}

let mySet = new Set()
let mySet2 = new Set()
// mySet2.add(1)
mySet2.add(2)

mySet.add(2)
mySet.add(3)
mySet.add(4)
mySet.add(5)
// console.log(mySet.difference(mySet2))
// console.log(mySet.union([1,2]))
// console.log(mySet2.isSubsetOf(mySet))
// mySet.console()

function checkSet(arrToBeSet, checkValue){
  // Only change code below this line
  let set = new Set(arrToBeSet)
  let arr = []
  arr.push(set.has(checkValue))
  arr.push(set.size)
  return arr
  // Only change code above this line
}