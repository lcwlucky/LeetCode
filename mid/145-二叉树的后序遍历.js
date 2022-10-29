// 递归
function postorderTraversal(root) {
  const res = [];
  if (!root) return res;
  res.push(...postorderTraversal(root.left));
  res.push(...postorderTraversal(root.right));
  res.push(root.val);
  return res;
}

//非递归
function postorderTraversal(root) {
  if (root == null) return [];
  let stack = [],
    res = [];
  let visited = new Set();
  let p = root;
  while (stack.length || p) {
    while (p) {
      stack.push(p);
      p = p.left;
    }
    let node = stack[stack.length - 1];
    // 如果右孩子存在，而且右孩子未被访问
    if (node.right && !visited.has(node.right)) {
      p = node.right;
      visited.add(node.right);
    } else {
      res.push(node.val);
      stack.pop();
    }
  }
  return res;
}

function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}

const c = new TreeNode(3);
const b = new TreeNode(2, c);
const a = new TreeNode(1, undefined, b);

console.log(postorderTraversal(a));
