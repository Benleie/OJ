// 88:https://leetcode-cn.com/problems/merge-sorted-array/

/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function(nums1, m, nums2, n) {
  nums1.splice(m, nums1.length - m, ...nums2.slice(0,n))
  nums1.sort((a,b) => a - b)
};
// console.log(merge([1,2,3,0,0,0],3,[2,5,6],3))

// move-zeroes
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
  let k = 0;
  for(let i = 0; i < nums.length; i++) {
    if(!nums[i]) {
      nums.splice(i,1)
      nums.push(0)
       
      // console.log(nums)
      console.log(i)
    }
  }
  console.log(nums)
};
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