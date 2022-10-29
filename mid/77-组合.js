
// 回溯 组合/子集问题  https://labuladong.github.io/algo/4/31/107/
function combine(n, k) {
  const res = [];
  const track = [];
  const nums = [];

  for (let i = 0; i < n; i++) {
    nums.push(i + 1);
  }

  function back(start) {
    if (track.length === k) {
      res.push([...track]);
      return;
    }
    if (track.length > k) return;

    for (let i = start; i < nums.length; i++) {
      track.push(nums[i]);
      back(i + 1);
      track.pop();
    }
  }

  back(0);
  return res;
}

console.log(combine(1,1));
