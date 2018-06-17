function tribonacci(signature,n){
	let arr = [],
		len = arr.length,
		num1 = signature[0],
		num2 = signature[1],
		num3 = signature[2]
	if(n<3){
		for(let i = 0; i<n; i++)
			arr.push(signature[i])
	} else {
		for(let i = 0; i<3; i++)
			arr.push(signature[i])
		while(arr.length < n){
			let num4 = num1 + num2 + num3;
			arr.push(num4);
			num1 = num2;
			num2 = num3;
			num3 = num4;
		} 
	}
	return arr
}
function tribonacci(signature,n){  
  for (var i = 0; i < n-3; i++) { // iterate n times
    signature.push(signature[i] + signature[i+1] + signature[i+2]); 
  }
  return signature.slice(0, n); //return trib - length of n
}
cl(tribonacci([1,1,1],10))


function filter_list(arr) {
	return arr.filter(function(v){
		return typeof v != 'string';
	})
}
cl(filter_list([1,2,'a','b']))









function separateLiquids(glass) {
	let water = [],
		density = ['O','A','W','H']
	for(let d = 0;d<density.length;d++){
		for(let i = 0; i<glass.length;i++){
			for(let j = 0;j<glass[0].length; j++){
				if(glass[i][j] === density[d])
					water.push(glass[i][j])
			}
		}
	}
	let result = []
	let n;
	if(water.length < 5)
		n = 1
	else {
		let arr = [],
			count = Math.ceil(Math.sqrt(water.length))
		for(let i = 3; i<count; i++){
			if(water.length%i === 0)
				arr.push(i)
		}
		cl(arr)
		n = arr[Math.floor(arr.length/2)]
	}
	for(let i = 0; i<Math.ceil(water.length/n); i++){
		result[i] = water.slice(n*i,n+n*i)
	}
	return n;
}
cl(separateLiquids([['H', 'H', 'W', 'O'],['W','W','O','W'],['H','H','O','O'],['A','O']]))
cl(separateLiquids(['H','H','O','W','A','A','A','O']))