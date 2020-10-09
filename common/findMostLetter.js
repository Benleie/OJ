/*
* 2019.03.19 一道笔试题
* 输入：多个字符串，逗号分隔
* 输出：出现最多的字母以及包含其的单词，要求用空格分隔
*/
function showMost(strs){
	let obj = {}
	  , result = []
	  , letter
	  , max_key
	  , max_num = 0

	//将所有单词的字母存放到对象obj中，字母为属性，其出现次数为属性值
	for(let i = 0; i < arguments.length; i++){
		for(let j = 0; j < arguments[i].length; j++){

			letter = arguments[i][j]

			if(!obj[letter])
				obj[letter] = 1;
			else
				obj[letter]++;
		}
	}
	// 找到出现最多的字母
	for(key in obj){
		if(max_num < obj[key]){
			max_num = obj[key];
			max_key = key
		}
	}
	result.push(max_key);

	// 找出包含该字母的单词
	for(key in arguments){
		if(arguments[key].indexOf(max_key) !== -1)
			result.push(arguments[key])
	}
	return result.join(' ')
	
}
console.log(showMost('love', 'young', 'breast', 'ok', 'kobe', 'smith'))

