/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

/* var twoSum = function(nums, target) {
  for(let i = 0; i < nums.length - 1; i++){
    // 每次需要在当前元素后面的数组中寻找差值
    if(nums.slice(i + 1).includes(target - nums[i]))
      return [i, nums.lastIndexOf(target - nums[i])]
  }
  console.log("can not find match value")
} */

/* var twoSum = function(nums, target) {
  for(let i = 0; i < nums.length; i++){
    for(let j = i + 1; j < nums.length; j++) {
      if(nums[i] + nums[j] === target)
        return [i,j]
    }
  }
  console.log("can not find match value")
} */

var twoSum = function(nums, target) {
  let map = new Map()
  for(let i = 0; i < nums.length; i++) {
    let other = target - nums[i]
    if(map.has(other))
      return [map.get(other), i]
    map.set(nums[i], i)
  }
  return 'can not find match value'
}
// console.log(twoSum([3,2,3,5], 8))


/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function(numRows) {
  if(numRows < 1) return []
  let resArr = [[1]]
  for(let i = 1; i < numRows; i++) {
    let arr = new Array(i + 1)
    for(let j = 0; j <= i; j++) {
      if(j === 0 || j === i) arr[j] = 1
      else arr[j] = resArr[i - 1][j - 1] + resArr[i - 1][j]
    }
    resArr.push(arr)
  }
  return resArr
};
// console.log(generate(5))

var lengthOfLastWord = function(s) {
  let length = 0;
  let count = 0;
  for(let i = 0; i < s.length; i++) {
      if(s[i] !== ' ') {
          length = ++count
      }
      else {
          count = 0
      }
  }
  return length
};
// console.log(lengthOfLastWord("b   a    sd   "))



/**
 * https://leetcode-cn.com/problems/intersection-of-two-arrays-ii/
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
/* 
// 暴力splice去重
var intersect = function(nums1, nums2) {
  let res = []
  nums1.forEach(value => {
      if(nums2.includes(value)) {
          res.push(value)
          nums2.splice(nums2.indexOf(value), 1)
      }
  })
  return res
}; */

// two-pointers
var intersect = function(nums1, nums2) {
  nums1.sort((a, b) => a - b)
  nums2.sort((a, b) => a - b)
  let k = 0, m = 0;
  let res = [];
  while(k < nums1.length && m < nums2.length) {
    if(nums1[k] === nums2[m]) {
      res.push(nums1[k])
      k++, m++
    } 
    else if(nums1[k] > nums2[m]) m++
    else k++
  }
  return res
};
// console.log(intersect([4,9,5], [9,4,9,8,4]))