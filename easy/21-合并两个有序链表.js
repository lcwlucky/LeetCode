function mergeTwoLists(l1, l2) {
  //递归
  // const merge = function(l1, l2) {
  //     if (l1 === null) return l2
  //     if (l2 === null) return l1
  //     if (l1.val < l2.val) {
  //         l1.next = merge(l1.next, l2)
  //         return l1
  //     }
  //     l2.next = merge(l1, l2.next)
  //     return l2
  // }
  // return merge(l1, l2)

  let head = new ListNode(-1);
  let dummyHead = head;
  while (l1 && l2) {
    if (l1.val < l2.val) {
      head.next = l1;
      l1 = l1.next;
    } else {
      head.next = l2;
      l2 = l2.next;
    }
    head = head.next;
  }
  if (l1) head.next = l1;
  if (l2) head.next = l2;
  return dummyHead.next;
}
