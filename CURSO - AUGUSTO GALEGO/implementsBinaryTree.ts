class TreeNode {
  val: number;
  left: TreeNode | null;
  right: TreeNode | null;

  constructor(val: number) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

class BinaryTree {
  root: TreeNode | null;

  constructor() {
    this.root = null;
  }

  insert(val: number): void {
    if (!this.root) {
      this.root = new TreeNode(val);
    } else {
      this._insertRecursive(this.root, val);
    }
  }

  private _insertRecursive(node: TreeNode, val: number): void {
    if (val < node.val) {
      if (node.left) {
        this._insertRecursive(node.left, val);
      } else {
        node.left = new TreeNode(val);
      }
    } else {
      if (node.right) {
        this._insertRecursive(node.right, val);
      } else {
        node.right = new TreeNode(val);
      }
    }
  }

  search(val: number): boolean {
    return this._searchRecursive(this.root, val);
  }

  private _searchRecursive(node: TreeNode | null, val: number): boolean {
    if (!node) {
      return false;
    }

    if (node.val === val) {
      return true;
    }

    if (val < node.val) {
      return this._searchRecursive(node.left, val);
    }

    return this._searchRecursive(node.right, val);
  }
}

const tree = new BinaryTree();
tree.insert(10);
tree.insert(5);
tree.insert(15);

console.log(tree.search(15)); // true
console.log(tree.search(7));  // false
