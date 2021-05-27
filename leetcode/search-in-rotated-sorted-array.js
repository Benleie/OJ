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

let arr = [0, 1, 2, 3, 4, 5, 6]
// console.log(search(arr, 2))

let binarySearch = function(nums, target) {
  let left = 0,
      right = nums.length - 1
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
console.log(binarySearch(arr, 3))