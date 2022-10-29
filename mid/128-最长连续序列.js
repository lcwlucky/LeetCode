// 方法一， 先将数据排序，然后遍历
// function longestConsecutive(nums) {
//   const len = nums.length;
//   if (len < 2) return len;
//   nums.sort((a, b) => a - b);
//   let ans = 1;
//   let maxlen = 1;
//   for (let i = 1; i < len; i++) {
//     if (nums[i] === nums[i - 1]) continue;
//     if (nums[i] === nums[i - 1] + 1) {
//       maxlen++;
//       ans = Math.max(ans, maxlen);
//     } else {
//       maxlen = 1;
//     }
//   }
//   return ans;
// }

// 方法二: hash表
function longestConsecutive(nums) {
  const set = new Set();
  for (const n of nums) {
    set.add(n);
  }
  let ans = 0;
  for (const n of set) {
    // 加这个判断是为了做优化，从 n-1 开始进行的搜索一定包含了从 n 开始进行的搜索
    if (!set.has(n - 1)) {
      let maxlen = 1;
      let curNum = n;
      while (set.has(curNum + 1)) {
        maxlen++;
        curNum++;
      }
      ans = Math.max(ans, maxlen);
    }
  }
  return ans;
}

console.log(longestConsecutive([0]));
