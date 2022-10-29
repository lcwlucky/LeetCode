function maxSubArray(nums) {
  if (nums.length == 0) return 0;

  const dp = [nums[0]];

  for (let i = 1; i < nums.length; i++) {
    dp[i] = Math.max(dp[i - 1] + nums[i], nums[i]);
  }
  console.log(dp);
  return Math.max(...dp);
}

// 减少空间
function maxSubArray(nums) {
  for (let i = 1; i < nums.length; i++) {
    nums[i] = Math.max(nums[i - 1] + nums[i], nums[i]);
  }
  return Math.max(...nums);
}
