function isValid(s) {
  if (!s) return true;
  const arr = [];
  for (let i = 0; i < s.length; i++) {
    if (["(", "{", "["].includes(s[i])) {
      arr.push(s[i]);
    }
    if (s[i] === "}" && arr.pop() !== "{") return false;
    if (s[i] === ")" && arr.pop() !== "(") return false;
    if (s[i] === "]" && arr.pop() !== "[") return false;
  }
  //最后面数组为空了才完全匹配
  return !arr.length;
}
