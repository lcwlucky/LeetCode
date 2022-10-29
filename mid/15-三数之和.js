function threeSum(nums) {
  function nSum(nums, n, start, target) {
    const res = [];
    if (n < 2 || nums.length < n) return res;

    if (n === 2) {
      let l = start;
      let r = nums.length - 1;
      while (l < r) {
        const left = nums[l];
        const right = nums[r];
        const sum = left + right;
        if (sum < target) {
          // l++
          // 优化
          while (l < r && nums[l] === left) l++;
        } else if (sum > target) {
          // r++
          // 优化
          while (l < r && nums[r] === right) r--;
        } else {
          res.push([left, right]);
          // 去重
          while (l < r && nums[l] === left) l++;
          while (l < r && nums[r] === right) r--;
        }
      }
    } else {
      // 穷举第一个数
      for (let i = start; i < nums.length; i++) {
        // n > 2是递归计算 (n-1)Sum
        const sub = nSum(nums, n - 1, i + 1, target - nums[i]);
        for (s of sub) {
          res.push([nums[i], ...s]);
        }
        // 跳过第一个数字重复的情况，否则会出现重复的结果
        while (i < nums.length - 1 && nums[i] === nums[i + 1]) i++;
      }
    }
    return res;
  }

  // 排序
  nums.sort((a, b) => a - b);
  return nSum(nums, 3, 0, 0);
}

console.log(threeSum([-1, 0, 1, 2, -1, -4]));
