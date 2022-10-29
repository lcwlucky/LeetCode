function twoSum1(nums, target) {
  const res = [];
  if (nums.length < 2) return res;
  let l = 0;
  let r = nums.length - 1;
  const originNums = [...nums];
  nums.sort((a, b) => a - b);
  while (l < r) {
    const left = nums[l];
    const right = nums[r];
    const sum = nums[l] + nums[r];
    if (sum < target) {
      // l++;
      // 优化
      while (l < r && nums[l] === left) l++;
    } else if (sum > target) {
      // r--;
      // 优化
      while (l < r && nums[r] === right) r--;
    } else {
      res.push(
        originNums.findIndex((i) => i === left),
        originNums.findIndex((i) => i === right)
      );
      // res.push(l, r);
      break; // 如果题目不止一组答案可以进行下面优化
      // 优化
      // while (l < r && nums[l] === left) l++;
      // while (l < r && nums[r] === right) r--;
    }
  }

  return res;
}

function twoSum(nums, target) {
  const map = new Map();
  for (let i = 0; i < nums.length; i++) {
    if (map.has(nums[i])) return [i, map.get(nums[i])];
    map.set(target - nums[i], i);
  }
  return [];
}

console.log(twoSum1([3, 2, 4], 6));
