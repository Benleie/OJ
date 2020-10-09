



/*
function stockList(listOfArt, listOfCat){
	// ... 
	let obj = {};
	listOfArt.map(list => {
		let catogary =  
	})
}
*/
//

/*
let arr = [1,2,3,3,3,4,2,5,6]
let arrNew = {}

for(key of arr){
		
}
*/

/*let arr1 = [25];
let arr2 = [25];

console.log(arr1 != arr2)
console.log(arr1 !== arr2)

*/
/*
var a = {a: 1,b: 2};
var b = a.a;
var c = a;
c.a = 3;
b++;
console.log(a.a); 
console.log(b);
*/

/*
var ary = Array(3);
ary[0]= 2; 
console.log(ary)
var result = ary.map(function(elem) { return '1'; })
console.log(result)
*/
	
//面向对象 	
/*
function Student(name,age,sex){
    this.name = name
    this.age = age
    this.sex = sex
    this.printAge = function(){
        console.log(this.age)
    }
    this.printSex = function(){
    	console.log(this.sex)
    }
}


const student = new Student('张三', 18, '男');
student.printAge();
student.printSex();
*/



/*
let arr1 = [[1,1],[1,2],[1,3],4]
let arr2 = arr1.slice()
arr2[0] = 0
console.log(arr1)
console.log(arr2)

var objects = [{ 'a': 1 }, { 'b': 2 }, [1,1]];
let shallow = objects.slice()
shallow[0] = { "a": 11}
console.log(shallow[0] === objects[0])
console.log(shallow[2] === objects[2])

console.log(typeof [1, 'sss'])
console.log([].constructor === Object)
console.log({}.constructor === Object)
*/


/*let str = ''
let arr = [1,2,3,3,3,4,2,5,6,"1","1","3"]
for(let pp of arr){
	str += (typeof pp === 'string') 
			? '\"' + pp + '\" '
			: pp + " "
}
console.log(str)*/

let arr = [1,2,3,3,3,4,2,5,6,1,3,7,5,6,2,2,2,3]
function findMostNumber(arr){
	let tmpObj = {}
	let result = []

	for(key of arr){
		(!tmpObj[key]) ?  tmpObj[key] = 1 : tmpObj[key]++
	}

	let max = 0;
	for(let key in tmpObj){
		if(max < tmpObj[key]){
			max = tmpObj[key]
		}
	}
	for(let key in tmpObj){
		if(tmpObj[key] === max){
			result.push(+key)
		}
	}
	return result
}
console.log(findMostNumber(arr))