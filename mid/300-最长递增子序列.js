// https://labuladong.github.io/algo/3/26/76/

// 动态规划  时间复杂度 O(n^2)
function lengthOfLIS(nums) {
  const len = nums.length;
  if (len === 0) return 0;
  // dp[i] 表示以 nums[i] 这个数结尾的最长递增子序列的长度
  // dp 数组全都初始化为 1
  const dp = new Array(len).fill(1);
  const res = 0;
  for (let i = 0; i < len; i++) {
    for (let j = 0; j < i; j++) {
      if (nums[i] > nums[j]) {
        dp[i] = Math.max(dp[i], dp[j] + 1);
      }
    }
  }

  // 最后的结果应该是dp数组中的最大值
  return Math.max(...dp);
}


// 

console.log(lengthOfLIS([10, 9, 2, 5, 3, 7, 101, 18]));
