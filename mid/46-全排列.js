// 回溯 排列问题  https://labuladong.github.io/algo/4/31/107/
function permute(nums) {
  const res = [];
  const track = [];
  const used = [];

  function back() {
    if (track.length === nums.length) {
      // 因为之后track会恢复，这里引用一个拷贝
      res.push([...track]);
      return;
    }
    for (let i = 0; i < nums.length; i++) {
      if (used[i]) continue;
      used[i] = true;
      track.push(nums[i]);
      back();
      track.pop();
      used[i] = false;
    }
  }

  back();
  return res;
}

console.log(permute([1, 2, 3]));
