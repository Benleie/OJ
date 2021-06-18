# Array
+ forEach(callback(currentValue, index?, array?))
  + 它总是返回undefined值，并且不可链式调用
  + forEach不会直接改变调用它的对象，但是那个对象可能会被callback函数改变.
    + 类似于for...of，不能通过赋值表达式修改currentValue
    ```js
    let arr3 = [1,2,3,4]
    for(value of arr3) {
      value = 99
      console.log(value)
    }
    // for(let i = 0; i < arr3.length; i++) {
    //   arr3[i] = 99
    // }
    console.log(arr3)
    ```
  + 不建议中止或跳出forEach() 循环

+ arr.map((currentValue[, index[, array]]) => { }[, thisArg])
  + 返回值：一个由原数组每个元素执行回调函数的结果组成的新数组。

+ arr.filter(callback(element[, index[, array]])[, thisArg])
  + return value: newArr

+ arr.lastIndexOf(searchElement[, fromIndex])

+ arr.slice([begin[, end]])
  + 左闭右开

+ array.splice(start[, deleteCount[, item1[, item2[, ...]]]])
  + 会改变原数组
  + deleteCount可选 若不填代表删掉之后的所有元素
  + 返回值：由被删除的元素组成的一个数组。如果只删除了一个元素，则返回只包含一个元素的数组。如果没有删除元素，则返回空数组。

+ arr.push(element1, ..., elementN)
  + return value: length of new arr
  + 可以传入多个值 `arr1.push(...arr2)`

+ array.pop()
  + Return value: The removed element from the array; undefined if the array is empty.

+ array.sort([compareFunction])
  + 原地排序算法；
  + 默认将数组元素转化为字符串，按照编码序列时进行排序 
  + 按照调用该函数的返回值排序

## ES6
+ arr.fill()



# String
+ ES5: substring, slice
+ ES6: includes
+ String类型是immutable objects [stackoverflow](https://stackoverflow.com/questions/51185/are-javascript-strings-immutable-do-i-need-a-string-builder-in-javascript)
  + String类型的所有方法均不能修改原string
  + 需要修改时（比如反转字符串），应该修改字符串数组，而不是字符串本身
+ 基本字符串和字符串对象

+ `let newStr = str.replace()`
  + The original string is left unchanged.
+ str.substring(indexStart[, indexEnd])
  + 如果任一参数小于0或为NaN，则被当作0。
+ str.slice(beginIndex[, endIndex])
  + 如果值为负数，会被当做 strLength + beginIndex 看待，这里的strLength 是字符串的长度（例如， 如果beginIndex是-3则看作是：strLength - 3）

+ concat
  + 强烈建议使用赋值操作符（+, +=）代替 concat 方法。
  
+ 

# Object
+ Object.keys()
+ Object.values()
+ 



## Map and Set
### Map
+ 拓展了Object,使得key并不限于字符串或者Symbol
```js
let map = new Map()
map.has(a)
map.get(a)
map.set(a, true)
console.log(map.size)
```
### Set
```js
let set = new Set()
set.size
set.add(1)
set.add(2)
set.has(3)
set.delete(1)
set.clear()
```


## code
```js
 users.hasOwnProperty('Alan');
'Alan' in users;
// both return true
```
## 归纳
+ 数组浅拷贝的方法
  ```
  newArray = [...oldArr]
  newArray = oldArr.slice()
  newArray = oldArr.concat()
  ```
+ 遍历对象属性
  + for ... in
  + Object.keys(obj)


# ES6
## 解构赋值
+ 将一个对象的部分属性赋值给另一个对象
```js
const data = {
  id: "1",
  name: 'Arya',
  age: 13,
  level: 12
}
let { id, name, level: rank } = data
const data2 = { id, name, rank }
```
