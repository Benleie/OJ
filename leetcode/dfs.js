const log = console.log

/**
 * https://leetcode-cn.com/problems/combination-sum/
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
/* var combinationSum = function(candidates, target) {
  const ans = [];
  const dfs = (target, combine, idx) => {
      if (idx === candidates.length) {
          return;
      }
      if (target === 0) {
          ans.push(combine);
          return;
      }
      // 直接跳过
      dfs(target, combine, idx + 1);

      // 选择当前数
      if (target - candidates[idx] >= 0) {
        console.log(combine)
          dfs(target - candidates[idx], [...combine, candidates[idx]], idx);
      }
  }

  dfs(target, [], 0);
  return ans;
}; */
const combinationSum = (candidates, target) => {
  const res = [];
  const dfs = (start, temp, sum) => { // start是当前选择的起点索引 temp是当前的集合 sum是当前求和
    console.log(start)
    if (sum >= target) {
      if (sum == target) {
        res.push(temp.slice()); // temp的拷贝 加入解集
      }
      return;   // 结束当前递归
    }
    for (let i = start; i < candidates.length; i++) { // 枚举当前可选的数，从start开始
      temp.push(candidates[i]);          // 选这个数
      dfs(i, temp, sum + candidates[i]); // 基于此继续选择，传i，下一次就不会选到i左边的数
      temp.pop();   // 撤销选择，回到选择candidates[i]之前的状态，继续尝试选同层右边的数
    }
  };
  dfs(0, [], 0); // 最开始可选的数是从第0项开始的，传入一个空集合，sum也为0
  return res;
};

log(combinationSum([2,3,6,7], 7))





/**
 * https://leetcode-cn.com/problems/powx-n/submissions/
 * @param {number} x
 * @param {number} n
 * @return {number}
 */
var myPow = function(x, n) {
  if(n < 0) return 1 / myPow(x, -n)
  if(n === 0) return 1
  const y = myPow(x, Math.floor(n / 2))
  return n % 2 === 0 ? y * y : y * y * x
};
// log(myPow(2,5))



/**
 * https://leetcode-cn.com/problems/subtree-of-another-tree/
 * @param {TreeNode} root
 * @param {TreeNode} subRoot
 * @return {boolean}
 */
var isSubtree = function(root, subRoot) {
  return dfs(root, subRoot)
  function dfs(s, t) {
    if(s === null) return false
    return check(s, t) || dfs(s.left, t) || dfs(s.right, t)
  }
  function check(s, t) {
    if(!s && !t) return true
    if(!s || !t || s.val !== t.val) return false
    return check(s.left, t.left) && check(s.right, t.right)
  }
};




/**
 * https://leetcode-cn.com/problems/average-of-levels-in-binary-tree/
 * @param {TreeNode} root
 * @return {number[]}
 */
var averageOfLevels = function(root) {
  //层级平均值
  let res=[],queue=[];
  queue.push(root);
  while(queue.length&&root!==null){
      //每一层节点个数
      let length=queue.length;
      //sum记录每一层的和
      let sum=0;
      for(let i=0;i<length;i++){
          let node=queue.shift();
          sum+=node.val;
          node.left&&queue.push(node.left);
          node.right&&queue.push(node.right);
      }
      //每一层的平均值存入数组res
      res.push(sum/length);
  }
  return res;
};



/**
 * https://leetcode-cn.com/problems/range-sum-of-bst/submissions/
 * @param {TreeNode} root
 * @param {number} low
 * @param {number} high
 * @return {number}
 */
// 二叉搜索树的中序遍历结果是有序的？？
var rangeSumBST = function(root, low, high) {
  let sum = 0
  dfs(root)
  return sum
  function dfs(root) {
      if(root === null) return
      dfs(root.left)
      if(root.val >= low && root.val <= high) sum += root.val
      dfs(root.right)
  }
};






/**
 * https://leetcode-cn.com/problems/cousins-in-binary-tree
 * @param {TreeNode} root
 * @param {number} x
 * @param {number} y
 * @return {boolean}
 */
var isCousins = function(root, x, y) {
  // x 的信息
  let x_parent = null, x_depth = null, x_found = false;
  // y 的信息
  let y_parent = null, y_depth = null, y_found = false;
  
  const dfs = (node, depth, parent) => {
      if (!node) {
          return;
      }
      if (node.val === x) {
          [x_parent, x_depth, x_found] = [parent, depth, true];
      } else if (node.val === y) {
          [y_parent, y_depth, y_found] = [parent, depth, true];
      }

      // 如果两个节点都找到了，就可以提前退出遍历
      // 即使不提前退出，对最坏情况下的时间复杂度也不会有影响
      if (x_found && y_found) {
          return;
      }

      dfs(node.left, depth + 1, node);

      if (x_found && y_found) {
          return;
      }

      dfs(node.right, depth + 1, node);
  }
  dfs(root, 0, null);
  return x_depth === y_depth && x_parent !== y_parent;
};





/**
 * https://leetcode-cn.com/problems/leaf-similar-trees/submissions/
 * @param {TreeNode} root1
 * @param {TreeNode} root2
 * @return {boolean}
 */
var leafSimilar = function(root1, root2) {
  const res1 = []
  const res2 = []
  function getLeafs(root, res) {
    if(!root) return ;
    if(!root.left && !root.right) res.push(root.val)
    getLeafs(root.left, res)
    getLeafs(root.right, res)
  }
  getLeafs(root1, res1)
  getLeafs(root2, res2)
  return res1.toString() === res2.toString()
};





/**
 * https://leetcode-cn.com/problems/flatten-binary-tree-to-linked-list/
 * @param {TreeNode} root
 * @return {void} Do not return anything, modify root in-place instead.
 */
var flatten = function(root) {
  const list = []
  preorderTraversal(root, list)
  for(let i = 1; i < list.length; i++) {
    const prev = list[i - 1], curr = list[i]
    prev.left = null
    prev.right = curr
  }

  function preorderTraversal(root, list) {
    if(root !== null) {
      list.push(root)
      preorderTraversal(root.left, list)
      preorderTraversal(root.right, list)
    }
  }
};




/**
 * https://leetcode-cn.com/problems/populating-next-right-pointers-in-each-node/submissions/
 * @param {Node} root
 * @return {Node}
 */
var connect = function(root) {
    if(!root) return null
    connectTwoNodes(root.left, root.right)
    return root

    function connectTwoNodes(node1, node2) {
      if(!node1 || !node2) return;
      node1.next = node2
      connectTwoNodes(node1.left, node1.right)
      connectTwoNodes(node2.left, node2.right)
      connectTwoNodes(node1.right, node2.left)
    }
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
  if (inorder.length == 0) return null;
  const root = new TreeNode(preorder[0]);
  const mid = inorder.indexOf(preorder[0]);
  root.left = buildTree(preorder.slice(1, mid + 1), inorder.slice(0, mid));
  root.right = buildTree(preorder.slice(mid + 1), inorder.slice(mid + 1));
  return root;
};

/* const buildTree = (preorder, inorder) => {
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
}; */




/**
 * https://leetcode-cn.com/problems/construct-binary-tree-from-inorder-and-postorder-traversal/
 * @param {number[]} inorder
 * @param {number[]} postorder
 * @return {TreeNode}
 */
// 如何确定根节点或者说父节点 之前是前序遍历非常方便
 // 后序遍历 后面最后一个就是根节点 这是个特性 抓住了
 // 我们根据这个根节点 分割出左右子树
 // 中序遍历的左右子树 根据中序的左右子树的数量 分割出后序遍历的左右子树
 // 中序遍历确定左右子树  后序遍历确定根节点
 
var buildTree = function(inorder, postorder) {
  if(!inorder.length){return null}
  const rootVal = postorder.pop()
  let root = new TreeNode(rootVal)
  let mid = inorder.indexOf(rootVal)
  const iLArray = inorder.slice(0,mid) // 中序遍历的左子树
  const pLArray = postorder.slice(0,iLArray.length) // 后序遍历的左子树
  root.left = buildTree(iLArray,pLArray)
  const iRArray = inorder.slice(mid+1) // // 中序遍历的右子树
  const pRArray = postorder.slice(iLArray.length,iLArray.length+iRArray.length) // 后序遍历的右子树
  root.right=buildTree(iRArray,pRArray)
  return root
};
