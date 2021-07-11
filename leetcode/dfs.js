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