
let quickSort = function(arr) {
	if(arr.length <= 1) return arr;
	let pivotIndex = Math.floor(arr.length/2);
	let pivot = arr.splice(pivotIndex,1)[0];
	let left = [], right = [];
	
	for(let i = 0; i < arr.length; i++){
		if(arr[i] < pivot) 
			left.push(arr[i])
		else
			right.push(arr[i])
	}

	return quickSort(left).concat([pivot],quickSort(right));
}

//每次选出最小的那个元素,和当前元素交换位置。
function selectSort(arr){
	let minIndex,temp;
	console.time('selectSort')
	for(let i = 0; i<arr.length-1; i++){
		minIndex = i;
		for(let j = i + 1; j<arr.length; j++)
			if(arr[j] < arr[minIndex]) minIndex=j;
		
		temp = arr[i];
		arr[i] = arr[minIndex];
		arr[minIndex] = temp;
	}
	console.timeEnd('selectSort');
	return arr;
}
//插入排序
function insertSort(arr){
	if({}.toString.call(arr).slice(8,-1) === 'Array'){
		console.time('insertSort')
		for(let i = 1; i<arr.length; i++){
			let value = arr[i];   //确认当前移动元素大小
			let j = i -1;       //移动元素前面的元素
			while(j>=0 && arr[j]>value){   
				arr[j+1] = arr[j]; //比较元素依次后移
				j--;   //移动元素前移
			}
			arr[j+1] = value;   //插入！
		}
		console.timeEnd('insertSort')
		return arr;
	} else {
		return 'argument is not a array!'
	}
}
//先二分查找到位置，再插入
function binaryInsertSort(arr){
	if({}.toString.call(arr).slice(8,-1) === "Array"){
		console.time('binaryInsertSort')
		for(let i = 1; i<arr.length; i++){
			let value = arr[i],
				left = 0,
				right = i - 1;
			while(left<=right){
				let middle = parseInt((left+right)/2)
				if(value < arr[middle])
					right = middle - 1;
				else
					left = middle + 1
			}
			for(let j = i; j > left; j--)
				arr[j] = arr[j-1]
			arr[left] = value
		}
		console.timeEnd('binaryInsertSort')
		return arr;
	} else 
		return 'argument is not a array!'
}
//每次从头开始，把最大的元素冒到后面
function bubbleSort(arr){
	console.time('bubbleSort')
		for(let j = 1; j<arr.length - i; j++){
			if(arr[j-1] > arr[j]){
				let temp = arr[j];
				arr[j] = arr[j-1]
				arr[j-1] = temp;
			}
		for(let i = 0; i<arr.length; i++){
	}
	}
	console.timeEnd('bubbleSort')
	return arr;
}
//改进冒泡排序，每次冒完泡，记住最后那个冒泡的位置，下次冒泡就只需要冒到标记的位置。
function bubbleSort2(arr){
	console.time('bubbleSort2')
	let i = arr.length;
	while(i > 0){
		let pos = 0;
		for(let j = 1; j < i; j++){
			if(arr[j-1] > arr[j]){
				pos = j 
				let temp = arr[j];
				arr[j] = arr[j-1]
				arr[j-1] = temp;
			}
		}
		i = pos;
	}
	console.timeEnd('bubbleSort2')
	return arr;
}




