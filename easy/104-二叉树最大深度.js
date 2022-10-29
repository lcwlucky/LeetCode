// 递归
function maxDepth(root) {
  if (!root) return 0;
  return 1 + Math.max(maxDepth(root.left), maxDepth(root.right));
}

// 迭代 层序遍历
function maxDepth(root) {
  if (!root) return 0;
  const queue = [root];
  let sum = 0;
  while (queue.length) {
    let size = queue.length;
    while (size--) {
      const node = queue.shift();
      node.left && queue.push(node.left);
      node.right && queue.push(node.right);
    }
    sum++;
  }
  return sum;
}
