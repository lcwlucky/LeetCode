// 具体题解： https://leetcode.cn/problems/next-permutation/solution/xia-yi-ge-pai-lie-suan-fa-xiang-jie-si-lu-tui-dao-/

function nextPermutation(nums) {
  const len = nums.length;
  // 1. 从后向前找到第一个相邻升序对  (i, j)
  let i = len - 2;
  let j = len - 1;
  let k = -1;
  while (i >= 0) {
    if (nums[i] < nums[j]) {
      break;
    }
    i--;
    j--;
  }
  // 找不到相邻的升序对，说明已经nums已经是降序的了，直接返回升序的结果
  if (i < 0) return nums.reverse();

  // 2. 在[j, end) 中从后向前找出第一个 A[k] > A[i]
  for (k = len - 1; k >= j; k--) {
    if (nums[k] > nums[i]) {
      break;
    }
  }

  // 3. 将A[k] 与A[i] 互换
  if (k >= j) {
    const t = nums[i];
    nums[i] = nums[k];
    nums[k] = t;
  }

  // 4. [j,end) 必然是降序的，使其升序
  for (let l = j, r = len - 1; l < r; l++, r--) {
    const t = nums[l];
    nums[l] = nums[r];
    nums[r] = t;
  }
  return nums;
}

console.log(nextPermutation([1, 2, 3]));
