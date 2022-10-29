function check(left, right) {
  if (!left || !right) return left === right; // 需要判断是否都是null或者其中一方为null
  if (left.val !== right.val) return false;

  return check(left.right, right.left) && check(left.left, right.right);
}

// 递归
const isSymmetric = function (root) {
  if (!root) return true;
  return check(root.left, root.right);
};

// 迭代
const check = (u, v) => {
  const q = [u, v];

  while (q.length) {
    u = q.shift();
    v = q.shift();

    if (!u && !v) continue;
    if (!u || !v || u.val !== v.val) return false;

    q.push(u.left);
    q.push(v.right);

    q.push(u.right);
    q.push(v.left);
  }
  return true;
};
var isSymmetric = function (root) {
  return check(root, root);
};
