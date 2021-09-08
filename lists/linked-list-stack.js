/**
 * stack is a data structure in which only the last inserted element can be removed and accessed.
 * LIFO list.
 */

import { LinkedListItem } from '../lib/linked-list-item.js';

export class LinkedListStack {
  constructor() {
    this.head = null;
  }

  // O(1)
  insertToHead(value) {
    const newItem = new LinkedListItem(value);
    if (this.head === null) {
      this.head = newItem;
    } else {
      const temp = this.head;
      this.head = newItem;
      this.head.next = temp;
    }
  }

  // O(1)
  removeFromHead() {
    if (this.head === null) {
      return null;
    }

    const currentHead = this.head;
    this.head = currentHead.next;
    return currentHead;
  }

  printAllItems() {
    let currentHead = this.head;
    while (currentHead) {
      console.log(currentHead.value, ' -> ')
      currentHead = currentHead.next;
    }
  }

  // O(n)
  get size() {
    let sizeCounter = 0;
    let currentHead = this.head;
    while (currentHead !== null) {
      sizeCounter += 1;
      currentHead = currentHead.next;
    }

    return sizeCounter;
  }

  // O(n)
  search(value) {
    let index = 0;
    let currentHead = this.head;
    while (currentHead) {
      if (currentHead.value === value) {
        break;
      }
      currentHead = currentHead.next;
      index += 1;
    }

    return index;
  }
}

const linkedList = new LinkedListStack();
linkedList.insertToHead('FirstInItem');
linkedList.insertToHead('TheSecondInItem');
linkedList.insertToHead('3rdInItem');
linkedList.printAllItems();

const indexSecondItem = linkedList.search('FirstInItem');
console.log('FirstInItem index is ', indexSecondItem);

const lastInItem = linkedList.removeFromHead();
console.log('Last In Stack item', lastInItem, 'current stack size is ', linkedList.size);

linkedList.printAllItems();