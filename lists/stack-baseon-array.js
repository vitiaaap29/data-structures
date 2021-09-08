class StackBaseOnArray {
  constructor() {
    this.items = [];
    this.topIndex = 0;
  }

  insertToHead(item) {
    this.items[this.items.length] = item;
  }

  removeFromHeadAndGetHeadValue() {
    const headIndex = this.items.length - 1;
    const headItem = this.items[headIndex];
    this.items.length--;
    return headItem;
  }

  get size(){
    return this.items.length;
  }
}

const stack = new StackBaseOnArray();
stack.insertToHead('Viktor');
stack.insertToHead('Sergo');
stack.insertToHead('Ivan');
stack.insertToHead('Genya');
console.log('Stack size after insert', stack.size);
let head = stack.removeFromHeadAndGetHeadValue();
console.log(head, stack.size);
head = stack.removeFromHeadAndGetHeadValue();
console.log(head, stack.size);
