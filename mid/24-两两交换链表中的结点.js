// 循环解法
function swapPairs(head) {
  if (!head || !head.next) return head;
  let tempHead = new ListNode();
  let p = tempHead;
  tempHead.next = head;
  //两两一组
  while (p.next && p.next.next) {
    let node1 = p.next;
    let node2 = p.next.next;
    node1.next = node2.next;
    node2.next = node1;
    p.next = node2;
    p = node1;
  }
  return tempHead.next;
}

//递归解法
function swapPairs(head) {
  if (!head || !head.next) return head;
  let node1 = head;
  let node2 = head.next;
  node1.next = swapPairs(node2.next);
  node2.next = node1;
  return node2;
}
