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
console.log(twoSum([3,2,3,5], 8))
