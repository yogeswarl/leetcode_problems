

export class TreeNode {
    val: number
    left: TreeNode | null
    right: TreeNode | null
    constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
        this.val = (val===undefined ? 0 : val)
        this.left = (left===undefined ? null : left)
        this.right = (right===undefined ? null : right)
    }

    maxDepth(root: TreeNode | null): number {
      if (root === null) return 0
      let lDepth = this.maxDepth(root.left);
      let rDepth = this.maxDepth(root.right);
      return (lDepth > rDepth)? (lDepth+1) : (rDepth+1)
    };
}

