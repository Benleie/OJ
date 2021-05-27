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

let arr = [1, 1, 2, 3, 3, 4]
console.log(removeDuplicates(arr))