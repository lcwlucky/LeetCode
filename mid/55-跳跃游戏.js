function canJump(nums) {
  const len = nums.length;
  let fast = 0;
  for (let i = 0; i < len; i++) {
    fast = Math.max(fast, i + nums[i]);
    // 如果能跳过最后一个位置
    if (fast >= len - 1) return true;

    // 可能碰到了 0，卡住跳不动了，其实不写也行，优化
    if (fast <= i) {
      return false;
    }
  }
  return false;
}

const nums = [0];

console.log(canJump(nums));
