// 递归
var mergeTrees = function (root1, root2) {
  if (!root1) return root2;
  if (!root2) return root1;
  root1.val += root2.val;

  root1.left = mergeTrees(root1.left, root2.left);
  root1.right = mergeTrees(root1.right, root2.right);
  return root1;
};


// 迭代
var mergeTrees = function (root1, root2) {
  if (!root1) return root2;
  if (!root2) return root1;

  const root = new TreeNode(root1.val + root2.val);

  const mergedQueue = [root];
  const queue = [root1, root2];

  while (mergedQueue.length) {
    const node = mergedQueue.shift();
    const node1 = queue.shift();
    const node2 = queue.shift();
    if (node1.left || node2.left) {
      if (node1.left && node2.left) {
        const newNode = new TreeNode(node1.val + node2.val);
        node.left = newNode;
        mergedQueue.push(newNode);
        queue.push(node1.left);
        queue.push(node2.left);
      } else if (node1.left) {
        node.left = node1.left;
      } else if (node2.left) {
        node.left = node2.left;
      }
    }

    if (node1.right || node2.right) {
      if (node1.right && node2.right) {
        const newNode = new TreeNode(node1.val + node2.val);
        node.right = newNode;
        mergedQueue.push(newNode);
        queue.push(node1.right);
        queue.push(node2.right);
      } else if (node1.right) {
        node.right = node1.right;
      } else if (node2.right) {
        node.right = node2.right;
      }
    }
  }

  return root;
};
