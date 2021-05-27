/**
 * 
 * 
 * 
 */

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
  for(value of nums) {
    if(target == value) return nums.indexOf(value)
  }
  return -1
};

let arr = [0, 1, 2, 3, 3, 3, 3, 3, 3, 3, 4, 5, 6]
// console.log(search(arr, 2))

let binarySearch = function(nums, target) {
  let left = 0,
      right = nums.length
  while(left <= right) {
    let mid = Math.floor((left + right) / 2)
    if(nums[mid] === target)
      return mid
    else if(nums[mid] < target)
      left = mid + 1
    else if(nums[mid] > target)
      right = mid - 1
  }
  return -1
}
let leftBound = function(nums, target) {
  if(!target || !nums.length) 
    return 'please input valid params'

  let left = 0,
      right = nums.length
  while(left < right) {
    let mid = Math.floor((left + right) / 2)
    if(nums[mid] >= target)
      right = mid
    else if(nums[mid] < target)
      left = mid + 1
    // else if(nums[mid] > target)
    //   right = mid
  }
  // console.log(target)
  return nums[left] == target ? left : -1
}

// console.log(leftBound([0,1,1,2,2,3,3], 1))
// console.log(binarySearch([0,1,2,3,4,5], 3))


// 34:https://leetcode-cn.com/problems/find-first-and-last-position-of-element-in-sorted-array/
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function(nums, target) {
  let left = 0, right = nums.length
  // find left boundary
  while(left < right) {
    let mid = Math.floor((left + right) / 2)
    if(nums[mid] >= target) 
      right = mid
    else
      left = mid + 1
  }
  if(nums[left] != target) return [-1,-1]
  // get right boundary
  for(let i = left; i < nums.length; i++) {
    if(nums[i] != target)
      return [left, i - 1]
    else if(i == nums.length - 1)
      return [left, i]
  }
};
// console.log(searchRange([1,1], 1))