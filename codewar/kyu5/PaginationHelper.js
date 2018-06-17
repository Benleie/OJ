/*
1.用构造函数创建对象，用原型链为其添加方法。
2.用三元表达式简写条件语句
3.另附ES6的用class和constructor写法
*/



console.log("now: " + new Date().toString().match(/\d+\:\d+\:\d+/))

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
		return this.itemCount() % this.itemsPerPage
	else 
		return -1;
}


PaginationHelper.prototype.pageIndex = function(itemIndex) {
	return itemIndex < this.itemCount() && itemIndex>=0
	? Math.floor(itemIndex / this.itemsPerPage)
	: -1;
}
var helper = new PaginationHelper(['a','b','c','d','e','f'], 4);
console.log(helper.pageCount());
console.log(helper.pageIndex(8))


class PaginationHelperInES6 {
  constructor(collection, itemsPerPage) {
    this.collection = collection
    this.itemsPerPage = itemsPerPage
    this.pages = Math.ceil(collection.length / itemsPerPage)
  }
  
  itemCount() {
    return this.collection.length
  }
  
  pageCount() {
    return this.pages
  }
  
  pageItemCount(pageIndex) {
    if (pageIndex >= this.pages || pageIndex < 0) {
      return -1
    } else if (pageIndex === this.pages - 1) {
      return (this.collection.length % this.itemsPerPage)
    } else {
      return this.itemsPerPage
    }
  }
  
  pageIndex(itemIndex) {
    if (itemIndex >= 0 && itemIndex < this.collection.length) {
      return Math.max(Math.ceil(itemIndex / this.itemsPerPage) - 1, 0)
    } else {
      return -1
    }
  }
}
