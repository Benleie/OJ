/**
 * @param {string} s
 * @return {boolean}
 */

 
var isValid = function(s) {
  let stringArr = s.split('')
  let stackArr = [];
  
  for(value of stringArr) {
    switch(value){
      case "(":
        stackArr.push(value)
        break
      case "[":
        stackArr.push(value)
        break
      case '{':
        stackArr.push(value)
        break
      case ")":
        if(stackArr.pop() !== "(") return false
        break
      case "]":
        if(stackArr.pop() !== '[') return false
        break
      case '}':
        if(stackArr.pop() !== '{') return false
        break
    }
  }
  return !stackArr.length
};

console.log(isValid("(([]){})"))
// console.log(isValid("([)])"))

// 速度慢，内存占用高
let isValid2 = (str) => {
  str = str.replace(/\s*/g, '')
  while(str.includes('()') || str.includes('[]') || str.includes('{}')) {
    str = str.replace('()', '')
    str = str.replace('[]', '')
    str = str.replace('{}', '')
  }
  return str === ''
}