import { LinkedListQueue } from '../../lists/linked-list-queue.js';

describe('Linked list Queue', () => {

  const queue = new LinkedListQueue();

  test('should queue has size after insert an item', () => {
    queue.insertToHead(34);
    expect(queue.size).toBe(1);
  });
});
