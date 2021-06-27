const log = console.log

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

// console.log(isValid("(([]){})"))
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

/**
 * https://leetcode-cn.com/problems/next-greater-element-i/submissions/
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var nextGreaterElement = function(nums1, nums2) {
  const arr = []
  const stack = []
  const map = new Map()
  for(let i = 0; i < nums2.length; i++) {
    while(stack.length && stack[stack.length - 1] < nums2[i]) {
      map.set(stack.pop(), nums2[i])
    }
    stack.push(nums2[i])
  }
  for(let i = 0; i < nums1.length; i++) {
    arr[i] = map.get(nums1[i]) || -1
  }
  return arr
}
// log(nextGreaterElement([4,1,2], [1,3,4,2]))

/**
 * https://leetcode-cn.com/problems/daily-temperatures/submissions/
 * @param {number[]} temperatures
 * @return {number[]}
 */
var dailyTemperatures = function(temperatures) {
  const arr = Array(temperatures.length).fill(0)
  const stack = []
  for(let i = 0; i < temperatures.length; i++) {
      const now = temperatures[i]
      while(stack.length && temperatures[stack[stack.length - 1]] < now) {
          const prevIndex = stack.pop()
          arr[prevIndex] = i - prevIndex
      }
      stack.push(i)
  }
  return arr
};
// log(dailyTemperatures([73,74,75,71,69,72,76,73]))




/**
 * https://leetcode-cn.com/problems/next-greater-element-ii/
 * @param {number[]} nums
 * @return {number[]}
 */
var nextGreaterElements = function(nums) {
  const MAX = Math.max(nums)
  const longNums = nums.concat(nums)
  const stack = []
  const res = Array(nums.length).fill(-1)

  for(let i = 0; i < longNums.length; i++) {
      while(stack.length && longNums[stack[stack.length - 1]] < longNums[i]) {
          const index = stack.pop()
          if(index < nums.length)
            res[index] = longNums[i]
      }
      stack.push(i)
      if(i > nums.length && longNums[i] === MAX) break
  }
  return res
};

// log(nextGreaterElements([4,1,6,4,5,3]))