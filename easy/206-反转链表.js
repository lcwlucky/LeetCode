//迭代
function reverseList(head) {
  if (!head || !head.next) return head;
  let cur = head;
  let pre = null;
  while (cur) {
    const next = cur.next;
    cur.next = pre;
    pre = cur;
    cur = next;
  }
  return pre;
}

//递归
function reverseList(head) {
  function reverse(pre, cur) {
    if (!cur) return pre;
    const next = cur.next;
    cur.next = pre;
    return reverse(cur, next);
  }
  return reverse(null, head);
}
