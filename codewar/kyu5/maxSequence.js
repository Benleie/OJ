/*
* 累加器函数reduce的使用
*/
console.log("now: " + new Date().toString().match(/\d+\:\d+\:\d+/))


function maxSequence(arr){
	let max = Math.max.apply(null,arr),
		sum = 0;
	for(let i = 0; i<arr.length; i++){
		if(sum < 0){
			sum = arr[i]
			continue;
		}
		sum += arr[i]
		if(sum > max){
			max = sum;
		}
	}
	console.log("function!")
	return (max>0)?max:0;
}

var maxSequence = function(arr){
    var currentSum = 0;
    return arr.reduce(function(maxSum, number){
    	console.log(maxSum);
        currentSum = Math.max(currentSum + number, 0);
        return Math.max(currentSum, maxSum);
    }, 0);
}



console.log(maxSequence([-2, 1, -3, 4, -1, 2, 1, -5, 4]))