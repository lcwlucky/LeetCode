// // hash 表  空间复杂度O(n)
var majorityElement = function (nums) {
  const n = nums.length;
  if (n === 1) return nums[0];

  const map = new Map();
  for (let i of nums) {
    if (!map.has(i)) map.set(i, 1);
    else {
      let c = map.get(i) + 1;
      if (c > n / 2) return i;
      map.set(i, c);
    }
  }
};

// // 排序法 空间复杂度O(logn)
var majorityElement = function (nums) {
  return nums.sort((a, b) => a - b)[Math.floor(nums.length / 2)];
};

//摩尔投票法 空间复杂度O(1)

// 从第一个数开始，遇到相同的加一，不同的加一，减到0就换下一个数，众数最后肯定会剩下
var majorityElement = function (nums) {
  let count = 1;
  let maj = nums[0];
  for (let i = 1; i < nums.length; i++) {
    if (maj === nums[i]) count++;
    else {
      count--;
      if (count === 0) {
        maj = nums[i + 1];
      }
    }
  }
  return maj;
};

