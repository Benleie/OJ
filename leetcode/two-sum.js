/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
  for(let i = 0; i < nums.length - 1; i++){
    // 每次需要在当前元素后面的数组中寻找差值
    if(nums.slice(i + 1).includes(target - nums[i]))
      return [i, nums.lastIndexOf(target - nums[i])]
  }
  console.log("can not find match value")
}
console.log(twoSum([3,2,3,5], 6))
/* var twoSum = function(nums, target) {
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
}; */