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
  for(let word of arr) {
      // let left = 0, right = word.length - 1;
      word = 'ggg'
      // while(left < right) {
      //     const temp = word[right]
      //     word[right--] = word[left]
      //     word[left++] = temp 
      // }
      console.log(word[1])
  }
  
  return arr.join(' ')
};
console.log(reverseWords("Let's take LeetCode contest"))


