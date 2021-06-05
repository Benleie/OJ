// 88:https://leetcode-cn.com/problems/merge-sorted-array/

/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function(nums1, m, nums2, n) {
  nums1.splice(m, nums1.length - m, ...nums2.slice(0,n))
  nums1.sort((a,b) => a - b)
};
// console.log(merge([1,2,3,0,0,0],3,[2,5,6],3))


// https://leetcode-cn.com/problems/can-place-flowers
/**
 * @param {number[]} flowerbed
 * @param {number} n
 * @return {boolean}
 */
var canPlaceFlowers = function(flowerbed, n) {
  let can = 0;
  let planted = false
  for(let i = 0; i < flowerbed.length; i++) {
      if(!planted) {
          if(flowerbed[i]) planted = false
          else if(!flowerbed[i - 1] && !flowerbed[i] && !flowerbed[i + 1]) {
            planted = true
            can++
          }
      } else {
          planted = false
          continue
      }
  }
  return can >= n ? true : false
};


var romanToInt = function(s) {
  const map = {
      I: 1,
      V: 5,
      X: 10,
      L: 50,
      C: 100,
      D: 500,
      M: 1000
  }
  let integer = 0;
  for(let i = 0; i < s.length; i++) {
    if(s[i+1] && map[s[i]] < map[s[i+1]]) {
        integer += map[s[i+1]] - map[s[i]]
        i++
    }
    else integer += map[s[i]]
}
  return integer
};
console.log(romanToInt("IV"))
