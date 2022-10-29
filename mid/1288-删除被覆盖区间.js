// 对于这两个起点相同的区间，我们需要保证长的那个区间在上面（按照终点降序），这样才会被判定为覆盖，否则会被错误地判定为相交，少算一个覆盖区间

function removeCoveredIntervals(intervals) {
  let res = 0;
  // 按照起点升序排列，起点相同时降序排列
  intervals.sort((a, b) => (a[0] == b[0] ? b[1] - a[1] : a[0] - b[0]));
  //记录合并区间的起点和终点
  let left = intervals[0][0];
  let right = intervals[0][1];
  for (let i = 1; i < intervals.length; i++) {
    const cur = intervals[i];
    // 情况一，找到覆盖区间
    if (left <= cur[0] && right >= cur[1]) {
      res++;
    }
    //  情况二，找到相交区间，合并
    if (right >= cur[0] && right <= cur[1]) {
      right = cur[1];
    }

    //情况三，完全不相交，更新起点和终点
    if (right < cur[0]) {
      left = cur[0];
      right = cur[1];
    }
  }
  return intervals.length - res;
}

console.log(
  removeCoveredIntervals([
    [1, 4],
    [3, 6],
    [2, 8],
  ])
);
