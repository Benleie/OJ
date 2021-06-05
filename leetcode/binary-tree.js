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

// https://leetcode-cn.com/problems/minimum-depth-of-binary-tree/
/**
 * @param {TreeNode} root
 * @return {number}
 */
var minDepth = function(root) {
  if(root === null) return 0
  if(root.left === null && root.right === null) return 1
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
  if(root.left !== null && root.right !== null) {
    if(root.left.val !== root.right.val) return false
  }
  if(root.left !== null) {
    if(!isSymmetric(root.left)) return false
  }
  if(root.right !== null) {
    if(!isSymmetric(root.right)) return false
  }
  return true
};