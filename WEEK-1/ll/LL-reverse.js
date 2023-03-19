class Node {
    constructor(data) {
      this.data = data;
      this.next = null;
    }
  }
  
  function printList(head) {
    let current = head;
    while (current !== null) {
      console.log(current.data);
      current = current.next;
    }
  }
  
  function printListReverse(head) {
    if (head === null) {
      return;
    }
    printListReverse(head.next);
    console.log(head.data);
  }
  
  let head = new Node(1);
  head.next = new Node(2);
  head.next.next = new Node(3);
  
  console.log("Elements in order: ");
  printList(head);
  console.log("Elements in reverse order: ");
  printListReverse(head);