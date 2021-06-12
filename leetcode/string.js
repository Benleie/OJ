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
console.log(longestCommonPrefix(["flower","flow","flight"]))