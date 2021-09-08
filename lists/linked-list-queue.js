/**
 * queue is a data structure in which you can remove only the first added element.
 * FIFO list.
 */

import { LinkedListItem } from '../lib/linked-list-item.js';
import { LinkedListStack } from './linked-list-stack.js';

class LinkedListQueue {
  constructor() {
    this.head = null;
  }

  // O(1)
  insertToHead(value) {
    return LinkedListStack.prototype.insertToHead.call(this, value);
  }

  // O(n)
  printAllItems() {
    return LinkedListStack.prototype.printAllItems.call(this);
  }

  // O(1)
  removeFromTail() {

  }
}

const linkedList = new LinkedListQueue();
linkedList.insertToHead('FirstInItem');
linkedList.insertToHead('TheSecondInItem');
linkedList.insertToHead('3rdInItem');
linkedList.printAllItems();

// const indexSecondItem = linkedList.search('FirstInItem');
// console.log('FirstInItem index is ', indexSecondItem);

const lastInItem = linkedList.removeFromTail();
console.log('Last In Stack item', lastInItem, 'current stack size is ', linkedList.size);

linkedList.printAllItems();