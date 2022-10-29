// 回溯 组合/子集问题  https://labuladong.github.io/algo/4/31/107/
function subsetsWithDup(nums) {
  const res = [];
  const track = [];

  // 先排序，让相同的元素靠在一起
  nums.sort((a, b) => a - b);

  function back(start) {
    res.push([...track]);

    for (let i = start; i < nums.length; i++) {
      // 剪枝去重
      if (i > start && nums[i] === nums[i - 1]) {
        continue;
      }
      track.push(nums[i]);
      back(i + 1);
      track.pop();
    }
  }

  back(0);
  return res;
}

console.log(subsetsWithDup([1, 2, 2]));
