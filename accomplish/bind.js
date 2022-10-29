/**
 * 1. 返回一个函数， this指向传入的第一个参数
 * 2. 如果返回的函数被用来作为构造函数new，那么this就是当前的实例
 */
function bind() {
  const [context, ...outArgs] = [...arguments];
  const self = this;
  function returnFn() {
    return self.apply(this instanceof returnFn ? this : context, [...outArgs, ...arguments]);
  }
  returnFn.prototype = Object.create(this.prototype);
  return returnFn;
}
