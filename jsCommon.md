# Array
+ forEach(callback(currentValue, index?, array?))
  + 它总是返回undefined值，并且不可链式调用
  + forEach不会直接改变调用它的对象，但是那个对象可能会被callback函数改变。
  + 不建议中止或跳出 forEach() 循环
+ arr.map((currentValue[, index[, array]]) => { }[, thisArg])
  + 返回值：一个由原数组每个元素执行回调函数的结果组成的新数组。
+ var newArray = arr.filter(callback(element[, index[, array]])[, thisArg])
+ arr.lastIndexOf(searchElement[, fromIndex])
+ arr.slice([begin[, end]])
  + 左闭右开
+ array.splice(start[, deleteCount[, item1[, item2[, ...]]]])
  + 会改变原数组
  + 返回值：由被删除的元素组成的一个数组。如果只删除了一个元素，则返回只包含一个元素的数组。如果没有删除元素，则返回空数组。
