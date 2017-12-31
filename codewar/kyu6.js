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


function maxSequence(arr){
	let max = Math.max.apply(null,arr),
		sum = 0;
	for(let i = 0; i<arr.length; i++){
		if(sum < 0){
			sum = arr[i]
			continue;
		}
		sum += arr[i]
		if(sum > max)
			max = sum;
	}
	cl('666')
	return (max>0)?max:0;
}
var maxSequence = function(arr){
    var currentSum = 0;
    return arr.reduce(function(maxSum, number){
        currentSum = Math.max(currentSum+number, 0);
        return Math.max(currentSum, maxSum);
    }, 0);
}
cl(maxSequence([-2, 1, -3, 4, -1, 2, 1, -5, 4]))


function PaginationHelper(collection, itemsPerPage){
	this.collection = collection;
	this.itemsPerPage = itemsPerPage;
}
PaginationHelper.prototype.itemCount = function() {
	return this.collection.length;
}
PaginationHelper.prototype.pageCount = function() {
	let divided = this.collection.length/this.itemsPerPage
	return Math.ceil(divided)
}
PaginationHelper.prototype.pageItemCount = function(pageIndex) {
	if(pageIndex < this.pageCount()-1)
		return this.itemsPerPage;
	else if(pageIndex === this.pageCount()-1)
		return this.itemCount()%this.itemsPerPage
	else 
		return -1;
}
PaginationHelper.prototype.pageIndex = function(itemIndex) {
	if(itemIndex < this.itemCount() && itemIndex>=0)
		return Math.floor(itemIndex/this.itemsPerPage)
	else
		return -1;
}
var helper = new PaginationHelper(['a','b','c','d','e','f'], 4);
cl(helper.pageCount());
cl(helper.pageIndex(8))


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