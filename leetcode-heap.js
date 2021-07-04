const log = console.log
// 把集中刷过的新题堆积起来，避免忙的时候，完成不了每日3道的日常任务




/**
 * https://leetcode-cn.com/problems/largest-rectangle-in-histogram/
 * @param {number[]} heights
 * @return {number}
 */
var largestRectangleArea = function(heights) {
  const stack = []
  let res = 0
  for(let i = 0; i < heights.length; i++) {
    while(stack.length && heights[i] < heights[stack[stack.length - 1]]) {
      const prev = stack.pop()
      res = Math.max(res, (i - prev) * heights[prev])
    }
    stack.push(i)
  }
  return res
};
// log(largestRectangleArea([2,1,5,6,2,3]))



/**
 * https://leetcode-cn.com/problems/shortest-unsorted-continuous-subarray/
 * @param {number[]} nums
 * @return {number}
 */
var findUnsortedSubarray = function(nums) {
  let left = 0 ,right = nums.length - 1
  let hasFind = {}
  while(Object.keys(hasFind).length !== 2 || left <= right) {
    if(nums[left] > nums[left + 1]) hasFind.left = left
    if(nums[right] < nums[right - 1]) hasFind.right = right
    if(!hasFind.left) left++
    if(!hasFind.right) right--
  }
  if(!hasFind.left || !hasFind.right) return 2
  return hasFind.right - hasFind.left
};
log(findUnsortedSubarray([2,6,4,8,10,9,15]))  // 5
