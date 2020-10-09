# 三十道前端基础算法题
1. 打印不重复三位数
```js
let arr = [1,2,3,4]
arr = arr.map(num => num.toString())
for(key1 of arr){
	for(key2 of arr){
		if(key2 != key1){
			for(key3 of arr){
				if(key3 !== key2 && key3 !== key1){
					console.log(key1 + key2 + key3)
				}
			}
		}
	}
	
}
```

2. 打印九九乘法表
```js
let str = '';
for(let i = 1; i <= 9; i++){
	for(let j = 1; j<=i; j++){
		str += i + '*' + j + '=' + i*j + " "
		if(i === j)
			str += "\n"
	}
}
console.log(str)
```

3. 打印金字塔和菱形
```js
```

4. 判断数组是否相等
```js
```

5. 数组去重
```js
let arr = [1,2,3,3,3,4,2,5,6,1,3,7,5,6]
let tmpObj = {}
let result = []
for(key of arr){
	(!tmpObj[key]) ?  tmpObj[key] = 1 : tmpObj[key]++
}
result = Object.keys(tmpObj).map(key => +key)
```

6. 找到字符串中包含最多的字母(可能是多个)
```js
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
```

7. ShallowClone DeepClone
```js
function shallowClone(initalObj, finalObj){
	let obj = finalObj || {};
	for(let i in initalObj){
		obj[i] = initalObj[i];
	}
	return obj;
}
```

```js
function deepClone(initalObj, finalObj) {
    var obj = finalObj || {};
    for (var i in initalObj) {
        var prop = initalObj[i];
  
        // 避免相互引用对象导致死循环，如initalObj.a = initalObj的情况
        if(prop === obj) {
            continue;
        }
  		//对嵌套对象进行递归复制
        if (typeof prop === 'object') {
            obj[i] = (prop.constructor === Array) ? [] : {};
            arguments.callee(prop, obj[i]);
        } else {
            obj[i] = prop;
        }
    }
    return obj;
}
```




```js
```

```js
```
