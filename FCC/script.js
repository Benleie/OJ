


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



function chunkArrayInGroups(arr, size) {
  let returnArr = []
  for(let start = 0; start < arr.length; start += size) {
    returnArr.push(arr.slice(start, start + size))
  }
  return returnArr;
}

chunkArrayInGroups(["a", "b", "c", "d"], 2);
console.log(chunkArrayInGroups(["a", "b", "c", "d"], 2))

