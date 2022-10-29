// 回溯 排列问题  https://labuladong.github.io/algo/4/31/107/
function permuteUnique(nums) {
  const res = [];
  const track = [];
  const used = [];

  // 先排序, 让相同的元素靠在一起
  nums.sort((a, b) => a - b);

  function back() {
    if (track.length === nums.length) {
      // 因为之后track会恢复，这里引用一个拷贝
      res.push([...track]);
      return;
    }
    for (let i = 0; i < nums.length; i++) {
      if (used[i]) continue;
      if (i > 0 && nums[i] === nums[i - 1] && !used[i - 1]) continue;
      track.push(nums[i]);
      used[i] = true;
      back(i + 1);
      used[i] = false;
      track.pop();
    }
  }

  back();
  return res;
}

// console.log(permuteUnique([1, 2, 3]));
console.log(permuteUnique([1, 1, 2]));
