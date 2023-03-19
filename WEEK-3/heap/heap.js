class MaxHeap {
    constructor() {
      this.heap = [];
    }
  
    insert(value) {
      // Push the new element to the end of the heap
      this.heap.push(value);
  
      // Get the index of the new element and its parent
      let currentIndex = this.heap.length - 1;
      let parentIndex = Math.floor((currentIndex - 1) / 2);
  
      // While the current element is greater than its parent, swap them
      while (this.heap[currentIndex] > this.heap[parentIndex]) {
        [this.heap[currentIndex], this.heap[parentIndex]] = [this.heap[parentIndex], this.heap[currentIndex]];
        currentIndex = parentIndex;
        parentIndex = Math.floor((currentIndex - 1) / 2);
      }
    }
  }
  
  // Min Heap implementation
  class MinHeap {
    constructor() {
      this.heap = [];
    }
  
    insert(value) {
      // Push the new element to the end of the heap
      this.heap.push(value);
  
      // Get the index of the new element and its parent
      let currentIndex = this.heap.length - 1;
      let parentIndex = Math.floor((currentIndex - 1) / 2);
  
      // While the current element is less than its parent, swap them
      while (this.heap[currentIndex] < this.heap[parentIndex]) {
        [this.heap[currentIndex], this.heap[parentIndex]] = [this.heap[parentIndex], this.heap[currentIndex]];
        currentIndex = parentIndex;
        parentIndex = Math.floor((currentIndex - 1) / 2);
      }
    }
  }
  
  // Example usage
  const maxHeap = new MaxHeap();
  maxHeap.insert(4);
  maxHeap.insert(2);
  maxHeap.insert(8);
  maxHeap.insert(5);
  console.log(maxHeap.heap); // [8, 5, 4, 2]
  
  const minHeap = new MinHeap();
  minHeap.insert(4);
  minHeap.insert(2);
  minHeap.insert(8);
  minHeap.insert(5);
  console.log(minHeap.heap); // [2, 4, 8, 5]
  
  
  