//递归
function inorderTraversal(root) {
  const res = [];
  if (!root) return res;
  res.push(...inorderTraversal(root.left));
  res.push(root.val);
  res.push(...inorderTraversal(root.right));
  return res;
}

//非递归
function inorderTraversal(root) {
  if (!root) return [];
  const res = [];
  const stack = [];
  let p = root;
  while (stack.length || p) {
    while (p) {
      stack.push(p);
      p = p.left;
    }
    const node = stack.pop();
    res.push(node.val);
    //转换到当前节点的右节点
    p = node.right;
  }
  return res;
}
