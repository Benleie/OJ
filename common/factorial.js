function byWhile(n){
  let returnVal = 1;
  while(n > 0){
    returnVal *= n--
  }
  return returnVal
}

function recursion(n){
  if(n === 1) return 1
  else {
    return n * recursion(n - 1)
  }
}
console.log(recursion(6))
console.log(byWhile(6))