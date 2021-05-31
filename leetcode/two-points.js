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
console.log(lengthOfLongestSubstring('aabcabcda'))