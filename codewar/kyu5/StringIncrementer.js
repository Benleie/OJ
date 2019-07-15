/**
 * 1. 这道题应该用正则表达式来写， 基本就是考察replace的使用，Specifying a function as a parameter.
 */
const testStr = ["foo", "foobar23", "foo0042", "foo099", '009']

function incre(str){
	let number,
		index,
		digitAmount,
		pureStr;

	for (let i = str.length - 1; i >= 0; i--) {
		if(+str[i] !== +str[i]){
			index = i + 1;
			break;
		}
		//if string is pure number
		if(i === 0) index = 0;
	}


	if(index === undefined) return str + "1"

	
	number = +str.substring(index) + 1;
	pureStr = str.substring(0, index);

	// the amount of digits should be considered.
	digitAmount = str.length - index;
	if(String(number).length !== digitAmount){
		let zero = digitAmount - String(number).length
		for(zero; zero > 0; zero--)
			pureStr = pureStr + 0
	}
	
	return pureStr + number 
}

console.log(testStr.map(incre))
console.log(incre('foo0042'))
