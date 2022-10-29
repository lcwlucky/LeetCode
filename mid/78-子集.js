// 回溯 组合/子集问题  https://labuladong.github.io/algo/4/31/107/
function subsets(nums) {
  const res = [];
  const track = [];

  function back(start) {
    res.push([...track]);

    for (let i = start; i < nums.length; i++) {
      track.push(nums[i]);
      back(i + 1);
      track.pop();
    }
  }

  back(0);
  return res;
}

console.log(subsets([1,2,3]));
