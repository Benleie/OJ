
class ListNode {
  constructor(value, next = null) {
    this.val = value
    this.next = next
  }
  toString(callback) {
    return callback ? callback(this.val) : `${this.val}`;
  }
  toArray() {
    let arr = []
    let that = this
    while(that) {
      arr.push(that.val)
      that = that.next
    }
    return arr
  }
}
// console.log(new LinkedListNode(2))
class LinkedList {
  constructor() {
    this.head = null
    this.tail = null
  }
  /**
   * @param {*} value
   * @return {LinkedList}
   */
  prepend(value) {
    // Make new node to be a head.
    const newNode = new ListNode(value, this.head);
    this.head = newNode;

    // If there is no tail yet let's make new node a tail.
    if (!this.tail) {
      this.tail = newNode;
    }

    return this;
  }

  /**
   * @param {*} value
   * @return {LinkedList}
   */
  append(value) {
    const newNode = new ListNode(value);

    // If there is no head yet let's make new node a head.
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;

      return this;
    }

    // Attach new node to the end of linked list.
    this.tail.next = newNode;
    this.tail = newNode;

    return this;
  }

  /**
   * @return {ListNode[]}
   */
  toArray() {
    const nodes = [];

    let currentNode = this.head;
    while (currentNode) {
      //print value
      nodes.push(currentNode.val);
      currentNode = currentNode.next;
    }

    return nodes;
  }
}




// 206: https://leetcode-cn.com/problems/reverse-linked-list/

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */

var reverseList = function(head) {
    let prev = null
    let curr = head
    while(curr) {
      const next = curr.next
      curr.next = prev

      prev = curr
      curr = next
    }
    return prev
};


//2:https://leetcode-cn.com/problems/add-two-numbers/
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
  let head = null, tail = null;
  let carry = 0;
  while (l1 || l2) {
      const n1 = l1 ? l1.val : 0;
      const n2 = l2 ? l2.val : 0;
      const sum = n1 + n2 + carry;
      if (!head) {
          head = tail = new ListNode(sum % 10);
      } else {
          tail.next = new ListNode(sum % 10);
          tail = tail.next;
      }
      carry = Math.floor(sum / 10);
      if (l1) {
          l1 = l1.next;
      }
      if (l2) {
          l2 = l2.next;
      }
  }
  if (carry > 0) {
      tail.next = new ListNode(carry);
  }
  return head;
};

// https://leetcode-cn.com/problems/add-two-numbers/solution/
//liang-ge-shu-xiang-jia-zui-rong-yi-li-jie-de-jie-f/
var addTwoNumbers = function(l1, l2) {
  let addOne = 0
  let sum = new ListNode('0')
  let head = sum
  while (addOne || l1 || l2) {
      let val1 = l1 !== null ? l1.val : 0
      let val2 = l2 !== null ? l2.val : 0
      let r1 = val1 + val2 + addOne
      addOne = r1 >= 10 ? 1 : 0
      sum.next = new ListNode(r1 % 10)
      sum = sum.next 
      if (l1) l1 = l1.next 
      if (l2) l2 = l2.next 
  }
  return head.next
};




//21 merge-two-sorted-lists
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var mergeTwoLists = function(l1, l2) {
  const prehead = new ListNode(-1);

  let prev = prehead;
  while (l1 != null && l2 != null) {
      if (l1.val <= l2.val) {
          prev.next = l1;
          l1 = l1.next;
      } else {
          prev.next = l2;
          l2 = l2.next;
      }
      prev = prev.next;
  }

  // 合并后 l1 和 l2 最多只有一个还未被合并完，我们直接将链表末尾指向未合并完的链表即可
  prev.next = l1 === null ? l2 : l1;

  return prehead.next;
};


// 141: https://leetcode-cn.com/problems/linked-list-cycle/
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function(head) {
    let map = new Map()
    while(head) {
      if(map.has(head)) 
        return true
      map.set(head, true)
      head = head.next
    }
    return false
};

// 19: https://leetcode-cn.com/problems/remove-nth-node-from-end-of-list/
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function(head, n) {
  let dummy = new ListNode(0, head)
  let curr = dummy
  let length = 0
  while(head) {
    head = head.next
    length++
  }
  for(let i = 0; i < length - n; i++) {
    console.log(i)
    curr = curr.next
  }
  curr.next = curr.next.next
  return dummy.next
};




// 234: https://leetcode-cn.com/problems/palindrome-linked-list/
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
var isPalindrome = function(head) {
  let arr = []
  while(head) {
    arr.push(head.val)
    head = head.next
  }
  for(let i = 0, j = arr.length - 1; i < j; i++, j--) {
    if(arr[i] !== arr[j])
      return false
  }
  return true
};

// 83: https://leetcode-cn.com/problems/remove-duplicates-from-sorted-list/
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var deleteDuplicates = function(head) {
  const newNode = new ListNode(-1)
  let curr = newNode
  let map = new Map()
  while(head) {
    if(!map.has(head.val)) {
      map.set(head.val, true)
      curr.next = head
      curr = curr.next
    } else curr.next = null
    head = head.next
  }
  return newNode.next
};
var deleteDuplicates = function(head) {
  if(!head) return head
  let curr = head
  while(curr.next) {
    if(curr.val === curr.next.val) {
      curr.next = curr.next.next
    } else {
      curr = curr.next
    }
  }
  return head
};


// 82; https://leetcode-cn.com/problems/remove-duplicates-from-sorted-list-ii/
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var deleteDuplicates = function(head) {
  const newNode = new ListNode(-1, head)
  let curr = newNode
  var isDup = false
  while(head) {
    // 保留当前项，继续与下一项对比
    if(head.val === head.next.val) {
      isDup = true
    } else {
      if(isDup) {
        isDup = false
        console.log('false')
        console.log(head)
      } else {
        console.log('put')
        curr.next = head
        curr = curr.next
      }
    }
    head = head.next
    
  }
  return newNode.next
};

/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */
var removeElements = function(head, val) {
  let dummy = new ListNode(-1, head)
  let curr = dummy
  while(curr && curr.next) {
      if(curr.next.val === val) {
          curr.next = curr.next.next
      } else
        curr = curr.next
  }
  return dummy.next
};




/* let arrEmpty = []
let arr33 = [0,1,1,2,2,2,3,4,4,5]
var isDup = false
for (let i = 0; i < arr33.length; i++) {
  if(arr33[i] === arr33[i + 1]) 
    isDup = true
  else {
    if(isDup) isDup = !isDup
    else arrEmpty.push(arr33[i])
  }
}
console.log(arrEmpty)
 */


 // https://leetcode-cn.com/problems/intersection-of-two-linked-lists/submissions/
 /**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
var getIntersectionNode = function(headA, headB) {
  let set = new Set()
  while(headA) {
      set.add(headA)
      headA = headA.next
  }
  while(headB) {
      if(set.has(headB)) {
          return headB
      }
      headB = headB.next
  }
  return null
};

// https://leetcode-cn.com/problems/rotate-list/
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var rotateRight = function(head, k) {
  if(k === 0 || !head) return head
  let newNode = new ListNode(0, head)
  let length = 0;
  let curr = head;
  let returnNode = new ListNode(0);
  while(curr) {
      curr = curr.next;
      length++
  }
  if(length === 1 || !(k % length)) return head
  k = length - k % length
  curr = newNode
  for(let i = 0; i < k; i++) {
      curr = curr.next
  }
  returnNode.next = curr.next
  curr.next = null
  curr = returnNode.next
  while(curr && curr.next) {
    curr = curr.next
  }
  curr.next = newNode.next
  return returnNode.next

};






const linkedList1 = new LinkedList();
[1,2].forEach(value => linkedList1.append(value))
console.log(rotateRight(linkedList1.head, 2).toArray())