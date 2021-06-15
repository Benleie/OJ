/**
 * move-zeroes
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
  let k = 0;
  for(let i = 0; i < nums.length; i++) {
    if(!nums[i]) {
      nums.splice(i,1)
      nums.push(0)
       // i--
      // console.log(nums)
      console.log(i)
    }
  }
  console.log(nums)
};

// 双指针的办法，与其说是把0移动到数组尾部，不如说是把非零元素移动到头部
var moveZeroes = function(nums) {
  let left = 0; 
  let right = 0;
  while(right < nums.length) {
    if(nums[right]) {
      const temp = nums[right]
      nums[right] = nums[left]
      nums[left] = temp
      left++
    }
    right++
  }
}


let arr3 = [0,1,2,3,4]
moveZeroes([0,0,1])

// reverse-string
/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
var reverseString = function(s) {
  let left = 0;
  let right = s.length - 1;
  while(left <= right) {
      const temp = s[left]
      s[left] = s[right]
      s[right] = temp
      left++
      right--
  }
};

/**
 * longest-substring-without-repeating-characters
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
  let map = new Map()
  let max = 0
  let left = 0
  for(let i = 0; i < s.length; i++) {
    if(map.has(s[i])) {
      left = Math.max(left, map.get(s[i]))
    }
    map.set(s[i], i + 1)
    max = Math.max(max, i + 1 - left)
  }
  return max
};
// console.log(lengthOfLongestSubstring('aabcabcda'))



/**
 * implement-strstr
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
/* var strStr = function(haystack, needle) {
  if(!needle.length) return 0
  let j = 1
  for(let i = 0; i < haystack.length; i++) {
    if(haystack[i] === needle[0]) {
      for(j; j < needle.length; j++){
        if(haystack[i + j] !== needle[j]) {
          j = 1
          break
        }
      }
      if(j === needle.length) return i
    }
  }
  return -1
}; */
/* var strStr = function(haystack, needle) {
  if(!needle.length) return 0
  return haystack.indexOf(needle)
}; */
var strStr = function(haystack, needle) {
  if(!needle.length) return 0
  for(let i = 0; i < haystack.length; i++) {
    if(haystack.slice(i, i + needle.length) === needle) {
      return i
    }
  }
  return -1
};


/**
 * 27：remove-element
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
// 把有效的数值排到数组前面，然后删掉后面的无效部分即可
var removeElement = function(nums, val) {
  let index = 0
  for(let i = 0; i < nums.length; i++) {
    if(nums[i] !==val) {
      nums[index++] = nums[i]
    }
  }
  nums.splice(index)
  return nums.length
};
removeElement([0,1,2,2,3],2)
// console.log([0,1,2].splice(1))


/**
 * 28：implement-strstr
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function(haystack, needle) {
  if(!needle.length) return 0
  let j = 1
  for(let i = 0; i < haystack.length; i++) {
    if(haystack[i] === needle[0]) {
      for(j; j < needle.length; j++){
        if(haystack[i + j] !== needle[j]) {
          j = 1
          break
        }
      }
      if(j === needle.length) return i
    }
  }
  return -1
};
// console.log(strStr('aaabaaabbbabaa', 'babb'))

/**
 * 11: container-with-most-water
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
  let max = 0;
  for(let i = 0; i < height.length; i++) {
    for(let j = i + 1; j < height.length; j++) {
      const area = (j - i) * Math.min(height[j], height[i]) 
      if(area > max) {
        console.log(`i = ${i},  j = ${j}`)
        max = area
      }
    }
  }
  return max
};
var maxArea = function(height) {
  let max = 0;
  let left = 0;
  let right = height.length - 1
  while(left < right) {
    const area = (right - left) * Math.min(height[left], height[right])
    if(area > max) max = area
    height[left] > height[right] ? right-- : left++
  }
  return max
};
// console.log(maxArea([1,8,6,2,5,4,8,3,7]))



/**
 * 15: 3sum
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
  if(!nums || nums.length < 3) return []
  let arr = []
  nums.sort((a,b) => a - b)
  for(let i = 0; i < nums.length && nums[i] <= 0; i++) {
    // 跳过重复元素
    if(i > 0 && nums[i] === nums[i - 1]) continue
    let left = i + 1, right = nums.length - 1
    while(left < right) {
      if(nums[i] + nums[left] + nums[right] === 0) {
        arr.push([nums[i], nums[left], nums[right]])
        // 跳过重复元素
        while(left < right && nums[left] === nums[left + 1])
          left++
        while(left < right && nums[right] === nums[right - 1])
          right--
        left++, right--;
      } else if(nums[i] + nums[left] + nums[right] < 0) {
        left++
      } else if(nums[i] + nums[left] + nums[right] > 0) {
        right--
      }
    }
  }
  return arr
};
// console.log(threeSum([-1,0,1,2,-1,-4]))



/**
 * https://leetcode-cn.com/problems/minimum-window-substring/
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
var minWindow = function(s, t) {
  let need = new Map()
    , window = new Map()
    , left = 0, right = 0
    , valid = 0
  let start = 0, length = Number.MAX_VALUE

  for(word of t) {
    need.set(word, need.has(word) ? need.get(word) + 1 : 1)
  }
  
  while(right < s.length) {
    let c = s[right]
    right++
    if (need.has(c)) {
      // window[c]++;
      window.set(c, window.has(c) ? window.get(c) + 1 : 1)
      if (window.get(c) == need.get(c))
          valid++;
    }

    // 判断左侧窗口是否要收缩
    while (valid == need.size) {
      //更新窗口数据与更新目标字符串的顺序没有要求
        // 进行窗口内数据的一系列更新
        let d = s[left];
        if (need.has(d)) {
            if (window.get(d) == need.get(d))
                valid--;
            window.set(d, window.get(d) - 1);
        }   
        // 在这里更新最小覆盖子串
        if (right - left < length) {
          start = left;
          length = right - left;
        }
        // 左移窗口
        left++;
    }
  }
  return length === Number.MAX_VALUE ?
    '' : s.slice(start, start + length)
};

// console.log(minWindow('CBDFADOBECODEBANCFF', 'ABC'))



/**
 * https://leetcode-cn.com/problems/permutation-in-string/
 * @param {string} s1
 * @param {string} s2  s1 = "ab" s2 = "eidbaooo"
 * @return {boolean}
 */
var checkInclusion = function(s1, s2) {
  let need = new Map()
    , window = new Map()
    , left = 0, right = 0
    , valid = 0

  for(word of s1) {
    need.set(word, need.has(word) ? need.get(word) + 1 : 1)
  }
  
  while(right < s2.length) {
    let c = s2[right]
    right++
    if (need.has(c)) {
      window.set(c, window.has(c) ? window.get(c) + 1 : 1)
      if (window.get(c) == need.get(c))
          valid++;
    }

    // 判断左侧窗口是否要收缩
    while (right - left >= s1.length) {
        if(valid == need.size) {
          return true
        }
        // 进行窗口内数据的一系列更新
        let d = s2[left];
        if (need.has(d)) {
            if (window.get(d) == need.get(d))
                valid--;
            window.set(d, window.get(d) - 1);
        }   
        // 左移窗口
        left++;
    }
  }
  return false
};
// console.log(checkInclusion('aba', 'dfafdbcbadsg'))


/**
 * https://leetcode-cn.com/problems/find-all-anagrams-in-a-string/
 * @param {string} s
 * @param {string} p
 * @return {number[]}
 */
var findAnagrams = function(s, p) {
  let need = new Map()
    , window = new Map()
    , left = 0, right = 0
    , valid = 0
  let resArr = []

  for(word of p) {
    need.set(word, need.has(word) ? need.get(word) + 1 : 1)
  }
  
  while(right < s.length) {
    let c = s[right]
    right++
    if (need.has(c)) {
      window.set(c, window.has(c) ? window.get(c) + 1 : 1)
      if (window.get(c) == need.get(c))
          valid++;
    }

    // 判断左侧窗口是否要收缩
    while (right - left >= p.length) {
        if(valid == need.size) {
          resArr.push(left)
        }
        // 进行窗口内数据的一系列更新
        let d = s[left];
        if (need.has(d)) {
            if (window.get(d) == need.get(d))
                valid--;
            window.set(d, window.get(d) - 1);
        }   
        // 左移窗口
        left++;
    }
  }
  return resArr
};
console.log(findAnagrams('abpadddabba', 'ab'))
// console.log(Math.max.apply(Math, [1,2,6,3]))