/**
 * queue is a data structure in which you can remove only the first added element.
 * FIFO list.
 */

import { LinkedListStack } from './linked-list-stack.js';
import { LinkedListItem } from '../lib/linked-list-item.js';

class LinkedListQueue {
  constructor() {
    this.head = null;
    this.tail = null;
  }

  // O(1)
  insertToHead(value) {
    const newItem = new LinkedListItem(value);
    if (this.tail === null) {
      this.tail = newItem;
      this.head = this.tail;
    } else {
      const oldHead = this.head;
      oldHead.next = newItem;
      this.head = newItem;
    }
  }

  // O(n)
  printAllItems() {
    for (let index = 0, currentTail = this.tail; currentTail !== null; index++) {
      console.log(index, currentTail.value);
      currentTail = currentTail.next;
    }
  }

  // O(1)
  removeAndGetFirstInItem() {
    if (this.tail === null) {
      return null;
    }
    const currentTail = this.tail;
    this.tail = this.tail.next;

    return currentTail.value;
  }

  get size() {
    let currentTail = this.tail;
    let length = 0;
    while (currentTail !== null) {
      length += 1;
      currentTail = currentTail.next;
    }

    return length;
  }
}

const linkedList = new LinkedListQueue();
linkedList.insertToHead('FirstInItem');
linkedList.insertToHead('TheSecondInItem');
linkedList.insertToHead('3rdInItem');
console.log('Size of queue', linkedList.size);
// linkedList.printAllItems();

// const indexSecondItem = linkedList.search('FirstInItem');
// console.log('FirstInItem index is ', indexSecondItem);

const firstInItem = linkedList.removeAndGetFirstInItem();
console.log('First In Queue item', firstInItem, ', current queue size is ', linkedList.size);

linkedList.printAllItems();