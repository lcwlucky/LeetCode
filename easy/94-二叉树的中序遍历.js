/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */

// 迭代
var inorderTraversal = function (root) {
  const res = [];
  if (!root) return res;
  const queue = [];

  let p = root;

  while (queue.length || p) {
    while (p) {
      queue.unshift(p);
      p = p.left;
    }
    const node = queue.shift();
    res.push(node.val);
    p = node.right;
  }
  return res;
};

// 递归
var inorderTraversal = function (root) {
  const res = [];
  if (!root) return res;
  res.push(...inorderTraversal(root.left));
  res.push(root.val);
  res.push(...inorderTraversal(root.right));
  return res;
};
