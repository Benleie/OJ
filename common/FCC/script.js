
function booWho(bool) {
  return (bool === true || bool === false)
  ? true
  : false;
}

booWho(null);



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