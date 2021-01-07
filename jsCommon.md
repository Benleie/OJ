# Array
+ forEach(callback(currentValue, index?, array?))
  + 它总是返回undefined值，并且不可链式调用
  + forEach不会直接改变调用它的对象，但是那个对象可能会被callback函数改变。
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
  + 返回值：由被删除的元素组成的一个数组。如果只删除了一个元素，则返回只包含一个元素的数组。如果没有删除元素，则返回空数组。

+ arr.push(element1, ..., elementN)
  + return value: length of new arr
  + 可以传入多个值 `arr1.push(...arr2)`

+ array.pop()
  + Return value: The removed element from the array; undefined if the array is empty.

+ array.sort([compareFunction])
  + 原地排序算法；默认将数组元素转化为字符串，按照编码序列时进行排序 
  + 按照调用该函数的返回值排序



# String
+ ES5: substring, slice
+ ES6: includes

+ `let newStr = str.replace()`
  + The original string is left unchanged.
+ str.substring(indexStart[, indexEnd])
  + 如果任一参数小于0或为NaN，则被当作0。
+ str.slice(beginIndex[, endIndex])
  + 如果值为负数，会被当做 strLength + beginIndex 看待，这里的strLength 是字符串的长度（例如， 如果beginIndex是-3则看作是：strLength - 3）

+ concat
  + 强烈建议使用赋值操作符（+, +=）代替 concat 方法。
  
+ 




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
