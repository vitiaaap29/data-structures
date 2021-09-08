/**
 * stack is a data structure in which only the last inserted element can be removed and accessed.
 * LIFO list.
 */

class LinkedListItem {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedListStack {
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
}

const linkedList = new LinkedListStack();
linkedList.insertToHead('FirstItem');
linkedList.insertToHead('TheSecondItem');
linkedList.insertToHead('3rdItem');
linkedList.printAllItems();

const lastInItem = linkedList.removeFromHead();
console.log('Last In Stack item', lastInItem, 'current stack size is ', linkedList.size);

linkedList.printAllItems();