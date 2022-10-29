function lengthOfLongestSubstring(s) {
  if (!s) return 0;
  const set = new Set();
  const len = s.length;
  let ans = 0;
  let r = -1;
  // 利用滑动窗口的思想
  for (let i = 0; i < len; i++) {
    if (i !== 0) {
      set.delete(s[i - 1]);
    }
    while (!set.has(s[r + 1]) && r + 1 < len) {
      set.add(s[r + 1]);
      r++;
    }
    ans = Math.max(ans, r - i + 1);
  }
  return ans;
}

