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
// log(largestRectangleArea([2,1,5,6,2,3]))
// log(largestRectangleArea([2,1,2]))
// log(largestRectangleArea([1,1]))
// log(largestRectangleArea([1,5]))
// log(largestRectangleArea([5, 4, 1, 2]))




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





/**
 * https://leetcode-cn.com/problems/maximum-binary-tree/
 * @param {number[]} nums
 * @return {TreeNode}
 */
var constructMaximumBinaryTree = function (nums) {
  const BuildTree = (arr, left, right) => {
      if (left > right)
          return null;
      let maxValue = -1;
      let maxIndex = -1;
      for (let i = left; i <= right; ++i) {
          if (arr[i] > maxValue) {
              maxValue = arr[i];
              maxIndex = i;
          }
      }
      let root = new TreeNode(maxValue);
      root.left = BuildTree(arr, left, maxIndex - 1);
      root.right = BuildTree(arr, maxIndex + 1, right);
      return root;
  }
  let root = BuildTree(nums, 0, nums.length - 1);
  return root;
};




/**
 * https://leetcode-cn.com/problems/construct-binary-tree-from-preorder-and-inorder-traversal/
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
const buildTree = (preorder, inorder) => {
  if (inorder.length == 0) return null;
  const root = new TreeNode(preorder[0]);
  const mid = inorder.indexOf(preorder[0]);
  root.left = buildTree(preorder.slice(1, mid + 1), inorder.slice(0, mid));
  root.right = buildTree(preorder.slice(mid + 1), inorder.slice(mid + 1));
  return root;
};

const buildTree = (preorder, inorder) => {
  const map = new Map();
  for (let i = 0; i < inorder.length; i++) {
    map.set(inorder[i], i);
  }
  const helper = (p_start, p_end, i_start, i_end) => {
    if (p_start > p_end) return null;
    let rootVal = preorder[p_start];    // 根节点的值
    let root = new TreeNode(rootVal);   // 根节点
    let mid = map.get(rootVal);         // 根节点在inorder的位置
    let leftNum = mid - i_start;        // 左子树的节点数
    root.left = helper(p_start + 1, p_start + leftNum, i_start, mid - 1);
    root.right = helper(p_start + leftNum + 1, p_end, mid + 1, i_end);
    return root;
  };
  return helper(0, preorder.length - 1, 0, inorder.length - 1);
};
