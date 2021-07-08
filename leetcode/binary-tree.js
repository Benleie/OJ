// https://leetcode-cn.com/problems/maximum-depth-of-binary-tree/
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */



/**
 * @param {TreeNode} root
 * @return {number}
 */
var maxDepth = function(root) {
  if(root === null) return 0
  return Math.max(maxDepth(root.left), maxDepth(root.right)) + 1
};

/**
 * 94: https://leetcode-cn.com/problems/binary-tree-inorder-traversal/
 * @param {TreeNode} root
 * @return {number[]}
 */
var inorderTraversal = function(root) {
  const res = []
  const inorder = (root) => {
    if(!root) return;
    inorder(root.left);
    res.push(root.val)
    inorder(root.right)
  }
  inorder(root)
  return res
};


/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var preorderTraversal = function(root) {
  const res = []
  const preorder = (root) => {
    if(!root) return;
    res.push(root.val)
    preorder(root.left);
    preorder(root.right)
  }
  preorder(root)
  return res
};

var postorderTraversal = function(root) {
  const res = []
  const post = (root) => {
    if(!root) return;
    post(root.left);
    post(root.right)
    res.push(root.val)
  }
  post(root)
  return res
};


// https://leetcode-cn.com/problems/balanced-binary-tree/
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isBalanced = function(root) {
  const depth = (node) => {
    if(node === null) return 0
    return Math.max(depth(node.left), depth(node.right)) + 1;
  }
  if(root === null) return true;
  return Math.abs(depth(root.left) - depth(root.right)) <= 1 && isBalanced(root.left) && isBalanced(root.right)
};




/**
 * https://leetcode-cn.com/problems/minimum-depth-of-binary-tree/
 * 最小深度是：根节点到最近的叶子结点的最短路径
 * @param {TreeNode} root
 * @return {number}
 */
var minDepth = function(root) {
  if(root === null) return 0
  if(root.left === null && root.right === null) return 1
  // 需要注意最小深度的定义，不然容易写出如下的代码
  // return Math.min(minDepth(root.left), minDepth(root.right), Number.MAX_VALUE) + 1
  let min_depth = Number.MAX_VALUE
  if(root.left) {
    min_depth = Math.min(minDepth(root.left), min_depth)
  }
  if(root.right) {
    min_depth = Math.min(minDepth(root.right), min_depth)
  }
  return min_depth + 1
};

// https://leetcode-cn.com/problems/invert-binary-tree/
/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */
var invertTree = function(root) {
  if(root === null) return root
  let temp;
  root.left = invertTree(root.left)
  root.right = invertTree(root.right)
  temp = root.right
  root.right = root.left;
  root.left = temp
  return root
};


// https://leetcode-cn.com/problems/symmetric-tree/
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isSymmetric = function(root) {
  const check = (p, q) => {
    if(!p && !q) return true
    if(!p || !q) return false
    return p.val === q.val && check(p.left, q.right) && check(p.right, q.left)
  }
  return check(root, root)
};


// https://leetcode-cn.com/problems/convert-sorted-array-to-binary-search-tree
/**
 * @param {number[]} nums
 * @return {TreeNode}
 */

var sortedArrayToBST = function(nums) {
  const helper = (arr, left, right) => {
    if(left > right) return null;
    let mid = Math.floor((left + right) / 2);
    let node = new TreeNode(arr[mid])
    node.left = helper(arr, left, mid - 1)
    node.right = helper(arr, mid + 1, right);
    return node
  }
  return helper(nums, 0, nums.length - 1)
};



/**
 * https://leetcode-cn.com/problems/binary-tree-paths/
 * @param {TreeNode} root
 * @return {string[]}
 */
var binaryTreePaths = function(root) {
  const paths = []
  const findPath = (root, path) => {
    if (!root) return ;
    path += root.val
      if(!root.left && !root.right) {
        paths.push(path)
      } else {
        path += '->'
        findPath(root.left, path)
        findPath(root.right, path)
      }
  }
  findPath(root, '')
  return paths
};



/**
 * https://leetcode-cn.com/problems/sum-of-left-leaves/
 * @param {TreeNode} root
 * @return {number}
 */
var sumOfLeftLeaves = function(root) {
  let sum = 0
  const getSum = root => {
    if (!root) return;
    if(root.left && !root.left.left && !root.left.right)   // 注意是左叶子
      sum += root.left.val
    getSum(root.left)
    getSum(root.right)
  }
  getSum(root)
  return sum
};



/**
 * https://leetcode-cn.com/problems/diameter-of-binary-tree/submissions/
 * @param {TreeNode} root
 * @return {number}
 */
var diameterOfBinaryTree = function(root) {
  let count = 0
  depth(root)
  return count
  function depth(root) {
      if(!root) return 0
      let left = depth(root.left)
      let right = depth(root.right)
      count = Math.max(count, left + right)
      return Math.max(left, right) + 1
  }
};

/**
 * https://leetcode-cn.com/problems/merge-two-binary-trees/submissions/
 * @param {TreeNode} root1
 * @param {TreeNode} root2
 * @return {TreeNode}
 */
var mergeTrees = function(root1, root2) {
  if(!root1) return root2
  if(!root2) return root1
  let newNode = new TreeNode(root1.val + root2.val)
  newNode.left = mergeTrees(root1.left, root2.left)
  newNode.right = mergeTrees(root1.right, root2.right)
  return newNode
};