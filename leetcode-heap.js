const log = console.log
// 把集中刷过的新题堆积起来，避免忙的时候，完成不了每日3道的日常任务




/**
 * https://leetcode-cn.com/problems/largest-rectangle-in-histogram/
 * @param {number[]} heights
 * @return {number}
 */
var largestRectangleArea = function(heights) {
  const MIN = Math.min(...heights)
  const stack = []
  let res = MIN * heights.length

  heights.push(0)
  for(let i = 0; i < heights.length; i++) {
    while(stack.length && heights[i] < heights[stack[stack.length - 1]]) {
      const prev = stack.pop()
      res = Math.max(res, (i - prev) * heights[prev])
    }
    stack.push(i)
  }
  return res
};
log(largestRectangleArea([2,1,5,6,2,3]))
log(largestRectangleArea([2,1,2]))
log(largestRectangleArea([1,1]))
log(largestRectangleArea([1,5]))
log(largestRectangleArea([5, 4, 1, 2]))



/**
 * https://leetcode-cn.com/problems/shortest-unsorted-continuous-subarray/
 * @param {number[]} nums
 * @return {number}
 */
var findUnsortedSubarray = function(nums) {
  const stack = []
  const res = [nums.length, -1]
  for(let i = 0; i < nums.length; i++) {
    while(stack.length && nums[i] < nums[stack[stack.length - 1]]) {
      const prev = stack.pop()
      if(prev < res[0]) res[0] = prev
      res[1] = i
    }
    stack.push(i)
  }
  if(res[0] === nums.length) return 0
  return res[1] - res[0] + 1
};
// log(findUnsortedSubarray([2,6,4,8,10,9,15]))  // 5

