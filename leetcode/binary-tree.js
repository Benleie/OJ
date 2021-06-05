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