// set
function hasCycle(head) {
  const set = new Set();
  let p = head;
  while (p) {
    if (set.has(p)) return true;
    set.add(p);
    p = p.next;
  }
  return false;
}


//快慢指针判断
function hasCycle(head) {
  if (!head || !head.next) return false
  let fast = head.next
  let slow = head
  while(fast && fast.next) {
    fast = fast.next.next
    slow = slow.next
    if(fast === slow) return true
  }
  return false
}
