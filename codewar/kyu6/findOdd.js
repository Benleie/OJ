console.log("now: " + new Date().toString().match(/\d+\:\d+\:\d+/))

function findOdd(arr){
	let uniqueArr = [],
		odd = 0
	for(let i = 0;i<arr.length; i++){
		if(!uniqueArr.includes(arr[i]))
			uniqueArr.push(arr[i])
	}
	for(let i=0; i<uniqueArr.length;i++){
		let count = 0
		for(let j=0;j<arr.length;j++){
			if(arr[j] === uniqueArr[i])
				count++;
		}
		if(count%2){
			odd = i;
			break;
		}
	}
	return uniqueArr[odd]
}
//findOdd = (xs) => xs.reduce((a, b) => a ^ b);
console.log(findOdd([20,1,-1,2,-2,3,3,5,5,1,2,4,20,4,-1,-2,5]))
console.log(findOdd([1,1,2,-2,5,2,4,4,-1,-2,5]))
console.log(findOdd([20,1,1,2,2,3,3,5,5,4,20,4,5]))
console.log(findOdd([1,1,1,1,1,1,10,1,1,1,1]))