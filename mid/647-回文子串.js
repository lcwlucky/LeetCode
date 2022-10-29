function countSubstrings(s) {
  const len = s.length;
  //dp[i][j] 表示字符串s在[i,j]区间的子串是否是一个回文串
  const dp = new Array(len);
  for (let i = 0; i < len; i++) {
    dp[i] = new Array(len).fill(false);
  }
  let num = 0;
  for (let j = 0; j < len; j++) {
    for (let i = 0; i <= j; i++) {
      if (s[i] === s[j] && (j - i < 2 || dp[i + 1][j - 1])) {
        num++;
        dp[i][j] = true;
      }
    }
  }
  return num;
}
