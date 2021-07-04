/**
 * 509 https://leetcode-cn.com/problems/fibonacci-number/
 * @param {number} n
 * @return {number}
 */
// 给出数列序号，求对应的值
var fib = function(n) {
    if(n > -1 && n < 2) {
      return n
    }
    let a = 0, b = 0, c = 1
    for(let i = 2; i <= n; i++ ){
      a = b;
      b = c
      c = a + b
    }
    return c
};

// 递归
var fib2 = function(n) {
  if(n > -1 && n < 2) {
    return n
  } else {
    return fib2(n - 1) + fib2(n - 2)
  }
}

// 给出值，求序号
var fibb = function(value) {
  let a = 0, b = 1, c = 1
  let count = 2
  while(c < value){
    a = b
    b = c
    c = a + b
    count ++
  }
  return value === c ? count : -1
}
console.log(fib2(2))
console.log(fibb(2))


/* 
** 动态规划入门
*/