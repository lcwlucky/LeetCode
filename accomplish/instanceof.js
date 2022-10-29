/* 
	首先 instanceof 左侧必须是对象, 才能找到它的原型链
	instanceof 右侧必须是函数, 函数才会prototype属性
  迭代 , 左侧对象的原型不等于右侧的 prototype时, 沿着原型链重新赋值左侧
*/
function instanceof(left, right) {
  const baseType = ['string', 'number', 'boolean', 'undefined', 'symbol', 'bigint'];
  if (baseType.includes(typeof left)) {
    return false;
  }
  const p = right.prototype;
  left = left.__proto__;
  while (true) {
    if (left === null) {
      //找到最顶层
      return false;
    }
    if (left === p) {
      return true;
    }
    left = left.__proto__;
  }
}
