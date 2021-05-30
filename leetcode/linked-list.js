
class ListNode {
  constructor(value, next = null) {
    this.val = value
    this.next = next
  }
  toString(callback) {
    return callback ? callback(this.val) : `${this.val}`;
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

const linkedList1 = new LinkedList();
linkedList1.append(1);
linkedList1.append(1);
linkedList1.append(2);
linkedList1.append(2);
// linkedList1.append(4);

console.log(deleteDuplicates(linkedList1.head))
// console.log(linkedList1.head)