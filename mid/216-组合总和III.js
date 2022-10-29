// 找出所有相加之和为 n 的 k 个数的组合，且满足下列条件：

// 只使用数字1到9
// 每个数字 最多使用一次 
// 返回 所有可能的有效组合的列表 。该列表不能包含相同的组合两次，组合可以以任何顺序返回。

// 链接：https://leetcode.cn/problems/combination-sum-iii

// 回溯 组合/子集问题  https://labuladong.github.io/algo/4/31/107/

function combinationSum3(k, n) {
  const res = [];
  const track = [];
  const nums = [];
  let sum = 0;

  for (let i = 0; i < 9; i++) {
    nums.push(i + 1);
  }

  function back(start) {
    if (sum === n && track.length === k) {
      res.push([...track]);
      return;
    }
    if (sum > n || track.length > k) return;

    for (let i = start; i < nums.length; i++) {
      track.push(nums[i]);
      sum += nums[i];
      back(i + 1);
      track.pop();
      sum -= nums[i];
    }
  }

  back(0);
  return res;
}

console.log(combinationSum3(3, 9));
