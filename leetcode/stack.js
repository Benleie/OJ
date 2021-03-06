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


/**
 * https://leetcode-cn.com/problems/letter-combinations-of-a-phone-number/
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function(digits) {
  const k = digits.length
  const map = ['', '', 'abc', 'def', 'ghi', 'jkl', 'mno', 'pqrs', 'tuv', 'wxyz']
  if(!k) return []
  let result = [], path = []
  backTrace(0)
  return result

  function backTrace(index) {
    if(path.length === k) {
      result.push(path.join(''))
      return ;
    }
    for(let value of map[digits[index]]) {
      path.push(value)
      backTrace(index + 1)
      path.pop()
    }
  }
};
// log(letterCombinations('4'))



/**
 * https://leetcode-cn.com/problems/permutations/
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function(nums) {
    let result = []
    let path = []
    backTrace([])
    return result
    function backTrace(used) {
      if(path.length === nums.length) {
        result.push(path.slice(0))
        return
      }
      for(let value of nums) {
        if(used[value]) continue
        used[value] = true
        path.push(value)
        backTrace(used)
        path.pop()
        used[value] = false
      }
    }
};
// log(permute([1,2]))


/**
 * https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/flat
 * @param {any[]} arr
 * @return {number[]}
 */

// Array flat
let arrToF = [1, [2, [3, 4, [5]]]]
// console.log(arrToF.flat(Infinity))

let flat = function(arr) {
  let res = []

  if(!Array.isArray(arr)) {
    return [arr]
  }
  
  for(let value of arr) {
    res.push(...flat(value))
  }
  return res
}
// console.log(flat(arrToF))


/**
 * https://leetcode-cn.com/problems/sort-characters-by-frequency/
 * @param {string} s
 * @return {string}
 */
var frequencySort = function(s) {
  const map = new Map()
  let res = ''
  for(let word of s) {
      map.set(word, map.get(word) ? map.get(word) + 1 : 1)
  }
  Array.from(map).sort((a, b) => b[1] - a[1])
  .forEach(value => {
    let count = value[1]
    while(count-- > 0) {
      res += value[0]
    }
  })
  return res
};
// log(frequencySort('tree'))



/**
 * 316 https://leetcode-cn.com/problems/remove-duplicate-letters/
 * @param {string} s
 * @return {string}
 */
var removeDuplicateLetters = function(s) {
  let map = new Map(), stack = []
  for(let word of s) {
    map.set(word, map.get(word) ? map.get(word) + 1 : 1)
  }
  for(let word of s) {
    map.set(word, map.get(word) - 1)
    if(!stack.includes(word)) {
      let j = stack.length
      // 栈顶的字符后面还有重复的，且字典序大于当前字符
      while(j-- && stack[j] > word && map.get(stack[j])) {
        stack.pop()
      }
      stack.push(word)
    }
  }
  return stack.join('')
};
// log(removeDuplicateLetters('babc'))
// log(removeDuplicateLetters('cbacdcbc'))



/**
 * https://leetcode-cn.com/problems/remove-k-digits/
 * @param {string} num
 * @param {number} k
 * @return {string}
 */
var removeKdigits = function(num, k) {
  let count = 0;
  const stack = []
  for(let value of num) {
    while(stack.length && value < stack[stack.length - 1] && count++ < k) {
      stack.pop()
    }
    stack.push(value)
    // remove leading zero
    if(stack.length === 1 && value === '0') stack.pop()
  }
  while(count++ < k) stack.pop()
  return stack.join('') || '0'
};
// log(removeKdigits('1346291', 3))
// log(removeKdigits('1134', 8))



/**
 * https://leetcode-cn.com/problems/132-pattern/
 * @param {number[]} nums
 * @return {boolean}
 */
var find132pattern = function(nums) {
  const stack = []
  let k = -Number.MAX_VALUE
  for(let i = nums.length - 1; i >= 0; i--){
    if(nums[i] < k) return true
    while(stack.length && nums[i] > stack[stack.length - 1]) {
      k = Math.max(k, stack.pop())
    }
    stack.push(nums[i])
  }
  return false
  // const m = Number.MAX_VALUE
  // for(let num of nums) {
  //   if(num > m && num < stack[stack.length - 1]) return true
  //   while(!stack.length && num < stack[stack.length - 1]) {
  //     m = Math.min(m, stack.pop())
  //   }
  //   stack.push(num)
  // }
  // return false
};
// log(find132pattern([3,1,4,2]))
// log(find132pattern([1,0,1,-4,-3]))



/**
 * https://leetcode-cn.com/problems/word-break/
 * @param {string} s
 * @param {string[]} wordDict
 * @return {boolean}
 */
var wordBreak = function(s, wordDict) {
  const wordSet = new Set(wordDict)
  const arrBreak = []
  const canBreak = (start) => {
    if(start === s.length) return true
    if(arrBreak[start] !== undefined) return arrBreak[start]
    for(let i = start + 1; i <= s.length; i++) {
      const prefix = s.slice(start, i)
      if(wordSet.has(prefix) && canBreak(i)) {
        arrBreak[start] = true
        return true
      }
    }
    arrBreak[start] = false
    return false
  }
  return canBreak(0)
};
// log(wordBreak('leetcodes', ['le', 'leet','s', 'code']))
// log(wordBreak('goalspecial', ['go', 'goal','special']))

