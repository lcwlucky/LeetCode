function rightSideView(root) {
  if (!root) return [];
  const queue = [];
  const res = [];
  queue.push(root);
  while (queue.length) {
    res.push(queue[0].val);
    let size = queue.length;
    while (size--) {
      const node = queue.shift();
      node.right && queue.push(node.right);
      node.left && queue.push(node.left);
    }
  }
  return res;
}
