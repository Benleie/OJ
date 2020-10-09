/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
  let stringArr = s.split('')
  let stackArr = [];
  stringArr.forEach(value => {
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
        if(stackArr.pop() !== "(") return "h"
        break
      case "]":
        if(stackArr.pop() !== '[') return 'hh'
        break
      case '}':
        if(stringArr.pop() !== '}') return 'hhh'
        break
    }
  })
  console.log(stackArr)
  return !stackArr.length
};
console.log(isValid("([]"))