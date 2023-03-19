// Define a Node class for creating new nodes
class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

// Define a BinarySearchTree class
class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  // Insert a new node with a given value into the tree
  insert(value) {
    // Create a new node with the given value
    const newNode = new Node(value);

    // If the tree is empty, make the new node the root
    if (this.root === null) {
      this.root = newNode;
      return this;
    }

    // Otherwise, traverse the tree to find the correct position for the new node
    let currentNode = this.root;
    while (true) {
      // If the new value is less than the current node's value, move left
      if (value < currentNode.value) {
        if (currentNode.left === null) {
          // If there's no left child, insert the new node as the left child
          currentNode.left = newNode;
          return this;
        }
        // Otherwise, continue traversing left
        currentNode = currentNode.left;
      }
      // If the new value is greater than the current node's value, move right
        else if (value > currentNode.value) {
        if (currentNode.right === null) {
          // If there's no right child, insert the new node as the right child
          currentNode.right = newNode;
          return this;
        }
        // Otherwise, continue traversing right
        currentNode = currentNode.right;
        }
      // If the new value is equal to the current node's value, return the tree (the value is already in the tree)
      else {
        return this;
      }
    }
  }

  // Search for a node with a given value in the tree
  search(value) {
    // If the tree is empty, return null
    if (this.root === null) {
      return null;
    }

    // Otherwise, traverse the tree to find the node with the given value
    let currentNode = this.root;
    while (currentNode) {
      // If the value is less than the current node's value, move left
      if (value < currentNode.value) {
        currentNode = currentNode.left;
      }
      // If the value is greater than the current node's value, move right
      else if (value > currentNode.value) {
        currentNode = currentNode.right;
      }
      // If the value is equal to the current node's value, return the node
      else {
        return currentNode;
      }
    }

    // If the value is not found, return null
    return null;
  }
}

var bst = new BinarySearchTree();
bst.insert(61);


console.log(bst);
