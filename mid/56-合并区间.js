function merge(intervals) {
  const res = [];
  // 先给起点排序
  intervals.sort((a, b) => a[0] - b[0]);
  res.push(intervals[0]);

  for (let i = 1; i < intervals.length; i++) {
    const cur = intervals[i];
    const last = res[res.length - 1];
    // 如果当前区间的start 小于等于前一个区间的end, 合并当前区间到前一个
    if (cur[0] <= last[1]) {
      last[1] = Math.max(last[1], cur[1]);
    } else {
      res.push(cur);
    }
  }

  return res;
}

const intervals = [
  [1, 3],
  [2, 6],
  [8, 10],
  [15, 18],
];
console.log(merge(intervals));
