/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     val: number
 *     left: TreeNode | null
 *     right: TreeNode | null
 *     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *     }
 * }
 */
interface TreeNode {
  val: number;
  left: TreeNode | null;
  right: TreeNode | null;
}

function sumNumbers(root: TreeNode | null): number {
  return addNums(root,0);
  
};
function addNums(root: TreeNode | null,currSum): number{
  if(!root) return 0;
  currSum = currSum * 10 + root.val;
  if(!root.left && !root.right) return currSum;
  return addNums(root.left,currSum) + addNums(root.right,currSum)
}
