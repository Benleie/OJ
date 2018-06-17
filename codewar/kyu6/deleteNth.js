
console.log(new Date().toString().match(/\d+\:\d+\:\d+/)[0])

/*function deleteNth(arr,x){
	let uniqueArr = [],
		countArr = [],
		resultArr = [];

    for(let i = 0;i<arr.length; i++){
        if(!uniqueArr.includes(arr[i]))
            uniqueArr.push(arr[i])
    }
    for(let i = 0; i<uniqueArr.length; i++)
    	countArr[i] = 0;
    for(let i = 0; i<arr.length; i++){
    	for(let j = 0;j<uniqueArr.length; j++){
    		if(uniqueArr[j] === arr[i] && countArr[j] < x){
    			resultArr.push(arr[i])
    			countArr[j]++;
    		}
    	}
    }
	return resultArr;
}*/


function deleteNth(arr,x) {
  var cache = {};
  return arr.filter(function(n) {
    cache[n] = (cache[n]||0) + 1;
    return cache[n] <= x;
  });
}


console.log(deleteNth([1,1,3,3,7,2,2,2,2], 3))
console.log(deleteNth([1,2,1,3,3,7,2,2,2], 3))
console.log(deleteNth(['a', 'a', 'c', 'c', 'f', 'b',  'b',  'b', 'b'], 3))