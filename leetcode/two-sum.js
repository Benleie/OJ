const log = console.log
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
// console.log(twoSum([3,2,3,5], 8))


/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function(numRows) {
  if(numRows < 1) return []
  let resArr = [[1]]
  for(let i = 1; i < numRows; i++) {
    let arr = new Array(i + 1)
    for(let j = 0; j <= i; j++) {
      if(j === 0 || j === i) arr[j] = 1
      else arr[j] = resArr[i - 1][j - 1] + resArr[i - 1][j]
    }
    resArr.push(arr)
  }
  return resArr
};
// console.log(generate(5))

var lengthOfLastWord = function(s) {
  let length = 0;
  let count = 0;
  for(let i = 0; i < s.length; i++) {
      if(s[i] !== ' ') {
          length = ++count
      }
      else {
          count = 0
      }
  }
  return length
};
// console.log(lengthOfLastWord("b   a    sd   "))



/**
 * https://leetcode-cn.com/problems/intersection-of-two-arrays-ii/
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
/* 
// 暴力splice去重
var intersect = function(nums1, nums2) {
  let res = []
  nums1.forEach(value => {
      if(nums2.includes(value)) {
          res.push(value)
          nums2.splice(nums2.indexOf(value), 1)
      }
  })
  return res
}; */



// two-pointers
var intersect = function(nums1, nums2) {
  nums1.sort((a, b) => a - b)
  nums2.sort((a, b) => a - b)
  let k = 0, m = 0;
  let res = [];
  while(k < nums1.length && m < nums2.length) {
    if(nums1[k] === nums2[m]) {
      res.push(nums1[k])
      k++, m++
    } 
    else if(nums1[k] > nums2[m]) m++
    else k++
  }
  return res
};
// console.log(intersect([4,9,5], [9,4,9,8,4]))


/**
 * https://leetcode-cn.com/problems/set-mismatch/submissions/
 * @param {number[]} nums
 * @return {number[]}
 */
var findErrorNums = function(nums) {
  nums.sort((a,b) => a - b)
  const set = new Set(nums)
  const arr = [0, 0]
  for(let i = 0, count = 1; i < nums.length; i++) {
      const count = i + 1
      if(!arr[1] && !set.has(count)) arr[1] = count
      if(nums[i] === nums[i+1]) arr[0] = nums[i]
  }
  return arr
};
// log(findErrorNums([1,5,3,2,2,7,6,4,8,9]))




/**
 * https://leetcode-cn.com/problems/binary-subarrays-with-sum/
 * @param {number[]} nums
 * @param {number} goal
 * @return {number}
 */
var numSubarraysWithSum = function(nums, goal) {
  const map = new Map([[0,1]]);
  let sum = 0,res = 0;
  for(const num of nums){
      sum += num;
      if(map.has(sum-goal)){
          res += map.get(sum-goal);
      }
      map.set(sum,(map.get(sum) || 0) + 1);
  }
  return res;
};
// log(numSubarraysWithSum([1,0,1,0,1], 2))



/**
 * https://leetcode-cn.com/problems/h-index
 * @param {number[]} citations
 * @return {number}
 */
var hIndex = function(citations) {
  // if(citations.length === 1) return !citations[0] ? 0 : 1
  citations.sort((a, b) => b - a)
  for(let i = 0; i < citations.length; i++) {
    if(i >= citations[i])
      return i
  }
  return Math.min(citations.length, Math.min(...citations))
};
// log(hIndex([3, 0, 6, 1, 5]))
// log(hIndex([1, 2]))
// log(hIndex([0]))
// log(hIndex([1]))
// log(hIndex([11, 15]))




/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var minAbsoluteSumDiff = function(nums1, nums2) {
  const MOD = 1000000007;
  const n = nums1.length;
  const rec = [...nums1];
  rec.sort((a, b) => a - b);
  let sum = 0, maxn = 0;
  for (let i = 0; i < n; i++) {
      const diff = Math.abs(nums1[i] - nums2[i]);
      sum = (sum + diff) % MOD;
      const j = binarySearch(rec, nums2[i]);
      if (j < n) {
          maxn = Math.max(maxn, diff - (rec[j] - nums2[i]));
      }
      if (j > 0) {
          maxn = Math.max(maxn, diff - (nums2[i] - rec[j - 1]));
      }
  }
  return (sum - maxn + MOD) % MOD;
};

const binarySearch = (rec, target) => {
  let low = 0, high = rec.length - 1;
  if (rec[high] < target) {
      return high + 1;
  }
  while (low < high) {
      const mid = Math.floor((high - low) / 2) + low;
      if (rec[mid] < target) {
          low = mid + 1;
      } else {
          high = mid;
      }
  }
  return low;
}
