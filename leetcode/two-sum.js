/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    for(let i = 0; i < nums.length -1; i++){
      if(nums.includes(target - nums[i])){
        if(target - nums[i] !== nums[i])
          return [i, nums.indexOf(target - nums[i])]
        else {
          if(i !== nums.lastIndexOf(nums[i]))
            return [i, nums.lastIndexOf(nums[i])]
        }
      }
    }
    console.log("can not find match value")
};
console.log(twoSum([3,2,4], 6))