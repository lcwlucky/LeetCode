// 买卖股票问题题解思路：https://labuladong.github.io/algo/3/26/94/
// 进阶题型 122、123、188、309、714

/**
 *
 * dp[i][0] 表示第i天手上没有持有股票的最大利润
 * dp[i][1] 表示第i天手上持有股票的最大利润
 *
 * 所以我们要求的是dp[n-1][0], 即最后一天手上没有持有股票的最大利润
 */

var maxProfit = function (prices) {
  const n = prices.length;
  if (n < 2) return 0;
  const dp = [];
  for (let i = 0; i < n; i++) {
    dp[i] = [];
    if (i === 0) {
      // 第一天没有买股票，最大利润为0
      dp[i][0] = 0;
      // 第一天买了股票，最大利润为-prices[i]
      dp[i][1] = -prices[i];
      continue;
    }
    // 昨天没有持有   昨天持有进入卖掉
    dp[i][0] = Math.max(dp[i - 1][0], dp[i - 1][1] + prices[i]);
    // 昨天持有今天不卖， 昨天没有持有，今天买入
    // 0 - prices[i] 表示今天要买股票，前面几天都不能买有股票，所以前几天没有持股的最大利润为0（没有买最大利润肯定为0）
    dp[i][1] = Math.max(dp[i - 1][1], 0 - prices[i]);
  }
  return dp[n - 1][0];
};
