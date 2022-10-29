/**
 *
 * @param {*} n
 * 一个「合法」括号组合的左括号数量一定等于右括号数量
 * 对于一个「合法」的括号字符串组合 p，必然对于任何 0 <= i < len(p) 都有：子串 p[0..i] 中左括号的数量都大于或等于右括号的数量
 */

// 回溯
// 题目可以改为 现在有 2n 个位置，每个位置可以放置字符 ( 或者 )，组成的所有括号组合中，有多少个是合法的？
function generateParenthesis(n) {
  // 记录所有合法的括号组合
  const res = [];
  // 可用的左括号和右括号数量初始化为 n
  backtrack(n, n, "", res);
  return res;
}

function backtrack(left, right, str, res) {
  // 剪枝
  // 若左括号剩下的多，说明不合法
  if (right < left) return;
  // 可用的括号数量小于0 肯定不合法
  if (right < 0 || left < 0) return;

  if (right === 0 && left === 0) {
    res.push(str);
    return;
  }

  // 尝试放一个 ( 括号
  // str += "(";
  backtrack(left - 1, right, str + "(", res);
  // 撤销选择
  // str = str.slice(0, -1);

  // 参数放一个 ）括号
  // str += ")";
  backtrack(left, right - 1, str + ")", res);
  // 撤销选择
  // str = str.slice(0, -1);
}

// DFS + 少量剪枝
// function generateParenthesis(n) {
//   const res = [];
//   func(0, 0, "", res, n);
//   return res;
// }

// function func(left, right, str, res, n) {
//   if (left > n || right > n || left < right) return;
//   if (left === n && right === n) {
//     res.push(str);
//     return;
//   }
//   func(left + 1, right, str + "(", res, n);
//   func(left, right + 1, str + ")", res, n);
// }

// 暴力法， 我们可以生成所有 2^{2n} 个由'(' 和 ')'字符组成的序列，然后检查某个是否有效即可

console.log(generateParenthesis(1));
