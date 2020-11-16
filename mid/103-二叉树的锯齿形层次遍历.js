function zigzagLevelOrder(root) {
  let res = [];
  if (!root) return res;
  let queue = [];
  let level = 0;
  queue.push(root);
  while (queue.length) {
    res.push([]);
    let size = queue.length;
    while (size--) {
      const node = queue.shift();
      res[level].push(node.val);
      node.left && queue.push(node.left);
      node.right && queue.push(node.right);
    }
    level++;
    if (level % 2) res[level].reverse();
  }
  return res;
}
