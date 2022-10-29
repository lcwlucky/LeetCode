/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */

// 回溯 组合/子集问题  https://labuladong.github.io/algo/4/31/107/
function combinationSum(candidates, target) {
  const res = [];
  if (candidates.length === 0) return res;
  // 记录回溯路径
  const track = [];
  back(candidates, 0, target, 0, track, res);
  return res;
}

function back(candidates, start, target, sum, track, res) {
  // 超过目标和
  if (sum > target) return;

  // 找到目标和
  if (sum === target) {
    // 因为之后track会恢复，这里引用一个拷贝
    res.push([...track]);
    return;
  }

  for (let i = start; i < candidates.length; i++) {
    track.push(candidates[i]);
    // 递归下一层回溯树
    back(candidates, i, target, sum + candidates[i], track, res);
    track.pop();
  }
}

console.log(combinationSum([2,3,6,7], 7));
