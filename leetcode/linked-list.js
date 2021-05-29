
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
    
};


const linkedList1 = new LinkedList();
linkedList1.append(1);
linkedList1.append(3);
linkedList1.append(4);
const linkedList2 = new LinkedList();
linkedList2.append(1);
linkedList2.append(3);
linkedList2.append(4);
// console.log(linkedList1.head)