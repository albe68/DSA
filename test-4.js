function isValidBST(root) {
    // Define a recursive helper function to validate the tree
    function isValidBSTHelper(node, min, max) {
        // If the node is null, it's valid
        if (!node) {
            return true;
        }
        // If the node's value is outside the valid range, it's invalid
        if ((min !== null && node.val <= min) || (max !== null && node.val >= max)) {
            return false;
        }
        // Check the left and right subtrees recursively
        return isValidBSTHelper(node.left, min, node.val) && isValidBSTHelper(node.right, node.val, max);
    }
    // Start the validation process with the root node and valid ranges of null
    return isValidBSTHelper(root, null, null);
}

class TreeNode {
    constructor(val, left=null, right=null) {
        this.val = val;
        this.left = left;
        this.right = right;
    }
}

const tree = new TreeNode(5,new TreeNode(3,new TreeNode(2),new TreeNode(4)),
new TreeNode(7,new TreeNode(6),
new TreeNode(8)));

console.log(isValidBST(tree)); // true

const invalidTree = new TreeNode(5,
                        new TreeNode(3,
                            new TreeNode(2),
                            new TreeNode(6)),
                        new TreeNode(7,
                            new TreeNode(4),
                            new TreeNode(8)));

console.log(isValidBST(invalidTree)); // false
