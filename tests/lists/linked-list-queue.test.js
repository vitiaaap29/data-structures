import { LinkedListQueue } from '../../lists/linked-list-queue.js';

describe('Linked list Queue', () => {

  const queue = new LinkedListQueue();
  const FIRST_IN_ITEM = 301;

  test('should queue has size after insert an item', () => {
    queue.insertToHead(FIRST_IN_ITEM);
    expect(queue.size).toBe(1);
  });

  test('should queue be empty after remove all items', () => {
    const firstInItem = queue.removeAndGetFirstInItem();
    expect(firstInItem).toBe(FIRST_IN_ITEM);
    expect(queue.size).toBe(0);
  });
});
