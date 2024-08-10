export class TreeNode {
    val: number
    left: TreeNode | null
    right: TreeNode | null
    constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
        this.val = (val===undefined ? 0 : val)
        this.left = (left===undefined ? null : left)
        this.right = (right===undefined ? null : right)
    }
    isSymmetric(root: TreeNode | null): boolean {
      return this.isMirror(root,root)
    };
    isMirror(p: TreeNode | null, q: TreeNode | null): boolean {
      if(p === null && q === null) return true
      if(p === null || q === null) return false
      // structural check
      return (p.val === q.val) && this.isMirror(p.left, q.right) && this.isMirror(p.right, q.left)
      
    }
}