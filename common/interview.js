/**
 * 2021.06.29 华为一面
 * @param {*} str 
 */

function getMost(str) {
  const map = new Map()
  let maxCount = 0
  let res = []
  
  for(let s of str) {
    map.set(s, map.get(s) ? map.get(s) + 1 : 1)
    maxCount = Math.max(maxCount, map.get(s) || 1)
  }
  // map.forEach((value, key) => {
  //   if(value === maxCount)
  //     res.push(key)
  // })
  for(let [key, value] of map) {
    if(value === maxCount) 
      res.push(key) 
  }
  
  return res
}
// log(getMost('abcb'))
// log(getMost('abcd'))