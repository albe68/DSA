class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

function arrayToLinkedList(array) {
  let head = null;
  let currentNode = null;

  for (let i = 0; i < array.length; i++) {
    const node = new Node(array[i]);
    if (head === null) {
      head = node;
      currentNode = node;
    } else {
      currentNode.next = node;
      currentNode = node;
    }
  }
  return head;
}

const array = [1, 2, 3, 4, 5];
const linkedList = arrayToLinkedList(array);
console.log(linkedList)