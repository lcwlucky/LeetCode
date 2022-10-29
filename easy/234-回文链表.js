// 翻转链表
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

/**
 *
 * 1.可以直接遍历整个链表然后存入数组，然后双指针遍历数组
 * 2.由快慢指针找出中间节点，翻转后半部分链表，然后与head进行比较
 *
 */

function isPalindrome(head) {
  if (!head || !head.next) return true;
  let fast = head;
  let slow = head;
  while (fast.next && fast.next.next) {
    fast = fast.next.next;
    slow = slow.next;
  }

  slow = reverseList(slow.next);
  while (slow) {
    if (slow.val !== head.val) return false;
    slow = slow.next;
    head = head.next;
  }
  return true;
}
