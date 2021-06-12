//https://leetcode-cn.com/problems/longest-consecutive-sequence/
/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutiveBySort = function(nums) {
  if (nums.length === 0) return 0
  nums.sort((a, b) => a - b)
  let count = 1
    , max = 1
  for(let i = 0; i < nums.length; i++) {
    if(nums[i] === nums[i + 1]) continue
    if(nums[i] === nums[i + 1] - 1) {
      count++
    } else count = 1
    max = Math.max(count, max)
  }
  return max
};

var longestConsecutive = (nums) => {
  let map = new Map()
  let max = 0
  for(num of nums) {
    if(!map.has(num)) {
      let prevLen = map.get(num - 1) || 0
      let nextLen = map.get(num + 1) || 0
      let currLen = prevLen + 1 + nextLen
      map.set(num, currLen)
      map.set(num - prevLen, currLen)
      map.set(num + nextLen, currLen)
      max = Math.max(max, currLen)
    }
  }
  return max
}


// console.log(longestConsecutive([20,1,2,2,3,0,10,19]))
// console.log(longestConsecutive([100,4,200,1,3,2]))

/**
 * https://leetcode-cn.com/problems/reverse-integer/
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
  if(!x) return 0;
  if(x < 0) return -reverse(-x)
  let num = 0;
  while(x) {
    num = num * 10 + x % 10
    x = Math.floor(x / 10)
  }
  return num >= -Math.pow(2,31) && num < Math.pow(2,31) - 1 ? num : 0
};
// console.log(reverse(-1230))