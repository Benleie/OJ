

let map1 = new Map([
  [true, 7, 2],
  [[1,2], [1]]
])
// console.log(map1)

let obj = {
  name: 'hhh',
  age: 23
}

var set = new Set([1, 2, 3, 3, 2, 1, 2, 3, 1]);
console.log(set.has(4))

// console.log(Array.from(set));


let rmDup = function(dupArr) {
  let newArr = []
  let index = 0
  for(let i = 1; i < dupArr.length; i++) {
    // 与后一项对比，看看是否重复
    if(dupArr[index] !== dupArr[i])
      // newArr.push(dupArr[i])
      dupArr[++index] = dupArr[i]
  }
  // return 
  return dupArr.slice(0, index + 1)
}

let arr11 = [1, 2, 2, 2, 3, 4, 4, 5]
// console.log(rmDup(arr11))

let arrToSort = [1, 100, 3, 2, 3,7,6,5,4]
arrToSort.sort((a, b) => a - b)
console.log(arrToSort)
