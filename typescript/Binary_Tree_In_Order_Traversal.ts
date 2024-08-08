  class TreeNode {
      val: number
      left: TreeNode | null
      right: TreeNode | null
      constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
          this.val = (val===undefined ? 0 : val)
          this.left = (left===undefined ? null : left)
          this.right = (right===undefined ? null : right)
      }

      inorderTraversal(root: TreeNode | null): number[] {
        return this.walk(root,[])
      };
      walk(curr: TreeNode | null, path: number[]): number[] {
      if(!curr){
        return path;
      }
      this.walk(curr.left,path)
      path.push(curr.val)
      this.walk(curr.right,path)
      
      return path;
      }
  }
 

