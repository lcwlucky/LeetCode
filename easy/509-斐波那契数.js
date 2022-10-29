// 自顶向下
// function fib(n) {
//   return dp(n, new Map());
// }

// function dp(n, memo) {
//   if (n === 0 || n === 1) return n;
//   if (memo.has(n)) return memo.get(n);
//   const r = dp(n - 1, memo) + dp(n - 2, memo);
//   memo.set(n, r);
//   return r;
// }

// 自低向上
function fib(n) {
  if (n === 0 || n === 1) return n;
  // // 其实没必要用所有中间状态都存，只用两个变量来存即可
  // const dp = [];
  // dp[0] = 0;
  // dp[1] = 1;
  // for (let i = 2; i <= n; i++) {
  //   dp[i] = dp[i - 1] + dp[i - 2];
  // }
  // return dp[n];

  let l = 0;
  let r = 1;
  for (let i = 2; i <= n; i++) {
    const t = l + r;
    l = r;
    r = t;
  }
  return r;
}

console.log(fib(2));
