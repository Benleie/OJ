
class LinkedListNode {
  constructor(value, next = null) {
    this.value = value
    this.next = next
  }
  toString(callback) {
    return callback ? callback(this.value) : `${this.value}`;
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
    const newNode = new LinkedListNode(value, this.head);
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
    const newNode = new LinkedListNode(value);

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
}

// const linkedList = new LinkedList();
// linkedList.append(3);
// linkedList.append(4);
// linkedList.prepend(1);
// console.log(linkedList.head)


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
