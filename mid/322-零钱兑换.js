// https://labuladong.github.io/algo/3/25/69/

// 自顶向下
// function coinChange(coins, amount) {
//   const memo = new Map();
//   // 定义：要凑出金额 n，至少要 dp(coins, n) 个硬币
//   function dp(coins, n) {
//     if (n === 0) return 0;
//     if (n < 0) return -1;
//     if (memo.has(n)) {
//       return memo.get(n);
//     }
//     let res = Number.MAX_SAFE_INTEGER;
//     for (let coin of coins) {
//       // 计算子问题
//       const sub = dp(coins, n - coin);
//       // 如果子问题无解则跳过
//       if (sub === -1) continue;

//       res = Math.min(res, sub + 1);
//     }
//     memo.set(n, res === Number.MAX_SAFE_INTEGER ? -1 : res);
//     return memo.get(n);
//   }

//   return dp(coins, amount);
// }

// 自低向上
function coinChange(coins, amount) {
  // dp 数组的定义：当目标金额为 i 时，至少需要 dp[i] 枚硬币凑出
  // 因为凑成 amount 金额的硬币数最多只可能等于 amount（全用 1 元面值的硬币），
  // 所以初始化为 amount + 1 就相当于初始化为正无穷，便于后续取最小值
  let flag = amount + 1;
  const dp = new Array(amount + 1).fill(flag);
  dp[0] = 0;
  for (let i = 1; i <= amount; i++) {
    // 内层 for 循环在求所有选择的最小值
    for (let coin of coins) {
      // 子问题无解，跳过
      if (i - coin < 0) continue;
      dp[i] = Math.min(dp[i], 1 + dp[i - coin]);
    }
  }
  return dp[amount] === flag ? -1 : dp[amount];
}

console.log(coinChange([2], 1));
