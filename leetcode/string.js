const log = console.log
/**
 * https://leetcode-cn.com/problems/first-unique-character-in-a-string
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function(s) {
  for(let i = 0; i < s.length; i++) {
      let j
      for(j = 0; j < s.length; j++) {
          if(i !== j && s[i] === s[j]) break
      }
      if(j === s.length) return i
  }
  return -1
};
// console.log(firstUniqChar('abcda'))

// https://leetcode-cn.com/problems/longest-common-prefix/
/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
  let prefix = ''
  for(let i = 0; i < strs[0].length; i++) {
    // console.log(str[0][i])
      for(str of strs) {
          if(strs[0][i] !== str[i])
              return prefix
      }
      prefix += strs[0][i]
  }
  return strs[0]
};
// console.log(longestCommonPrefix(["flower","flow","flight"]))




/**
 * https://leetcode-cn.com/problems/add-binary/submissions/
 * @param {string} a
 * @param {string} b
 * @return {string}
 */

// js精度会丢失
/* var addBinary = function(a, b) {
  let numA = parseInt(a, 2)
  let numB = parseInt(b, 2)
  let total = numA + numB
  return Number(total).toString(2)
}; */

/**
 * https://leetcode-cn.com/problems/reverse-words-in-a-string-iii/submissions/
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
  let arr = s.split(' ')
  for(let i = 0; i < arr.length; i++) {
      let strArr = arr[i].split('')
      let left = 0, right = strArr.length - 1;
      while(left <= right) {
          const temp = strArr[right]
          strArr[right--] = strArr[left]
          strArr[left++] = temp
      }
      arr[i] = strArr.join('')
  }
  
  return arr.join(' ')
};
// console.log(reverseWords("Let's take LeetCode contest"))




/**
 * https://leetcode-cn.com/problems/find-common-characters/
 * @param {string[]} words
 * @return {string[]}
 */
var commonChars = function(words) {
  
};


/**
 * https://leetcode-cn.com/problems/long-pressed-name/
 * @param {string} name
 * @param {string} typed
 * @return {boolean}
 */
var isLongPressedName = function(name, typed) {
  let k = 0;
  let prev = ''
  for(let i = 0; i < typed.length; i++) {
    if(typed[i] === name[k]) {
      prev = name[k++]
    } 
    else if(typed[i] === prev) continue
    else return false
  }
  return k === name.length ? true : false
};
// console.log(isLongPressedName('alexd', 'ale'))




/**
 * https://leetcode-cn.com/problems/next-greater-element-i/submissions/
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
/* var nextGreaterElement = function(nums1, nums2) {
  const arr = Array(nums1.length).fill(-1)
  for(let j = 0; j < nums1.length; j++) {
      const k = nums2.indexOf(nums1[j])
      for(let i = k + 1; i < nums2.length; i++) {
          if(nums2[i] > nums1[j]) {
            arr[j] = nums2[i]
            break
          } 
      }
  }
  return arr
}; */






/**
 * https://leetcode-cn.com/problems/decode-string/
 * @param {string} s
 * @return {string}
 */
var decodeString = function(s) {
    let count = 0;
    let str = ''
    let res = ''
    for(let i = 0; i < s.length; i++) {
      const word = s[i]
      if(!isNaN(Number(word))) {
        count = 10 * count + Number(word)
      }
      else if(word === '[') {
        const resStr = decodeString(s.slice(s.indexOf(word) + 1))
        str += resStr
        i += resStr.length + 1
      }
      else if(word === ']') return str 
      else {
        str += word
        log(`str is ${str}`)
      }
      
    }
    while(count > 0) {
      res += str
      count--
    }
    return res
};
// log(decodeString('3[mn2[k]]'))