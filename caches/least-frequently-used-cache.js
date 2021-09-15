/**
  when the cache exceeds its limit, the system
  deletes the item with the lowest reference frequency. The easiest implementation
  of the LFU cache is assigning a counter to every block loaded into the cache and
  incrementing a counter every time a reference is made to that block. When the cache
  exceeds its limit, the system searches for the block with the lowest counter and
  removes it from the cache.
 */

import { LinkedListQueue as DoubleLinkedList } from '../lists/linked-list-queue';

class CacheNode {
  constructor(key, value) {
    this.key = key;
    this.value = value;
    this.frequency = 1;
  }
}

export class LeastFrequentlyUsedCache {
  constructor(capacity) {
    this.capacity = capacity;
    this.keys = {};
    this.frequencies = {};
  }

  set(key, value) {
    const node = this.keys[key];

    if (node) {
      const oldFrequency = node.frequency;
      node.value = value;
      node.frequency += 1;
      this.frequencies[oldFrequency];
    } else {
      const newNode = new CacheNode(key, value);
    }
  }
}