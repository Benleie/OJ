/*
数组的filter方法配合箭头函数实在是短小精悍！
*/
console.log("now: " + new Date().toString().match(/\d+\:\d+\:\d+/))

function inArray(arr1, arr2){
	let str2 = arr2.join(' ')
	console.log(str2)
	return arr1.filter(str => str2.includes(str)).sort();
	/*return arr1.filter(function(s){
		return str2.includes(s)
	}).sort()*/
}	

a1 = ["arp", "strong", "live", "tub"];
a2 = ["lively", "alive", "harp", "sharp", "armstrong", "but"];
console.log(inArray(a1, a2))