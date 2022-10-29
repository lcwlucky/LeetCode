//递归
function preorderTraversal(root) {
  const arr = [];
  if (!root) return arr;
  arr.push(root.val);
  arr.push(...preorderTraversal(root.left));
  arr.push(...preorderTraversal(root.right));
  return arr;
}

//非递归
function preorderTraversal(root) {
  const res = [];
  if (!root) return res;
  const stack = [];
  stack.push(root);
  while (stack.length) {
    const node = stack.pop();
    res.push(node.val);
    node.right && stack.push(node.right);
    node.left && stack.push(node.left);
  }
  return res;
}