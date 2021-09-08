/**
 * queue is a data structure in which you can remove only the first added element.
 * FIFO list.
 */

import { LinkedListItem } from '../lib/linked-list-item.js';

export class LinkedListQueue {
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

  // O(n)
  get size() {
    let currentTail = this.tail;
    let length = 0;
    while (currentTail !== null) {
      length += 1;
      currentTail = currentTail.next;
    }

    return length;
  }

  /**
   * Search a position from tail (0 index) to head (length - 1 index)
   * @param {} value 
   * Return index if success find and -1 else.
   */
  search(value) {
    let currentTail = this.tail;
    let index = 0;
    let isSuccessSearch = false;
    while (currentTail !== null) {
      isSuccessSearch = currentTail.value === value;
      if (isSuccessSearch) {
        break;
      }
      currentTail = currentTail.next;
      index += 1;
    }

    if (!isSuccessSearch) {
      return -1;
    }

    return index;
  }
}

const linkedList = new LinkedListQueue();
linkedList.insertToHead('FirstInItem');
linkedList.insertToHead('TheSecondInItem');
linkedList.insertToHead('3rdInItem');
console.log('Size of queue', linkedList.size);
linkedList.printAllItems();

const indexSecondItem = linkedList.search('TheSecondInItem');
console.log('TheSecondInItem index is ', indexSecondItem);

const indexThirdItem = linkedList.search('3rdInItem');
console.log('3rdInItem index is ', indexThirdItem);

const firstInItem = linkedList.removeAndGetFirstInItem();
console.log('First In Queue item', firstInItem, ', current queue size is ', linkedList.size);

linkedList.printAllItems();