
// 
/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
  let index = 0;
  for(let i = 1; i < nums.length; i++) {
    if(nums[index] !== nums[i]) 
      nums[++index] = nums[i]
  }
  nums.splice(index + 1)
  return index + 1
};

//  https://leetcode-cn.com/problems/remove-duplicates-from-sorted-array-ii/

var removeDuplicates2 = function(nums) {
  let index = 0;
  let count = 1;
  for(let i = 1; i < nums.length; i++) {
    if(nums[index] !== nums[i]) {
      nums[++index] = nums[i]
      count = 1
    } 
    else {
      if(count < 2) {
        nums[++index] = nums[i]
      }
      count++
    }
  }
  nums.splice(index + 1)
  // console.log(nums)
  return index + 1
};



let arr = [1, 1, 1, 2, 3, 3, 3, 3, 4]
console.log(removeDuplicates2([0,0,1,1,1,1,1,2,3,3,3]))
