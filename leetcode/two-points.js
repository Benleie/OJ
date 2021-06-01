/**
 * move-zeroes
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
  let k = 0;
  for(let i = 0; i < nums.length; i++) {
    if(!nums[i]) {
      nums.splice(i,1)
      nums.push(0)
       // i--
      // console.log(nums)
      console.log(i)
    }
  }
  console.log(nums)
};

// 双指针的办法，与其说是把0移动到数组尾部，不如说是把非零元素移动到头部
var moveZeroes = function(nums) {
  let left = 0; 
  let right = 0;
  while(right < nums.length) {
    if(nums[right]) {
      const temp = nums[right]
      nums[right] = nums[left]
      nums[left] = temp
      left++
    }
    right++
  }
}


let arr3 = [0,1,2,3,4]
moveZeroes([0,0,1])

// reverse-string
/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
var reverseString = function(s) {
  let left = 0;
  let right = s.length - 1;
  while(left <= right) {
      const temp = s[left]
      s[left] = s[right]
      s[right] = temp
      left++
      right--
  }
};

/**
 * longest-substring-without-repeating-characters
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
  let map = new Map()
  let max = 0
  let left = 0
  for(let i = 0; i < s.length; i++) {
    if(map.has(s[i])) {
      left = Math.max(left, map.get(s[i]))
    }
    map.set(s[i], i + 1)
    max = Math.max(max, i + 1 - left)
  }
  return max
};
// console.log(lengthOfLongestSubstring('aabcabcda'))



/**
 * implement-strstr
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function(haystack, needle) {

};


/**
 * 27：remove-element
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
// 把有效的数值排到数组前面，然后删掉后面的无效部分即可
var removeElement = function(nums, val) {
  let index = 0
  for(let i = 0; i < nums.length; i++) {
    if(nums[i] !==val) {
      nums[index++] = nums[i]
    }
  }
  nums.splice(index)
  return nums.length
};
removeElement([0,1,2,2,3],2)
// console.log([0,1,2].splice(1))


/**
 * 28：implement-strstr
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function(haystack, needle) {
  if(!needle.length) return 0
  let j = 1
  for(let i = 0; i < haystack.length; i++) {
    if(haystack[i] === needle[0]) {
      for(j; j < needle.length; j++){
        if(haystack[i + j] !== needle[j]) {
          j = 1
          break
        }
      }
      if(j === needle.length) return i
    }
  }
  return -1
};
console.log(strStr('aaabaaabbbabaa', 'babb'))

