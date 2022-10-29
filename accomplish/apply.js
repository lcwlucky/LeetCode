function apply() {
  let [context, args] = [...arguments];
  if (typeof this !== 'function') {
    throw new Error();
  }
  context = context || window;
  const key = Symbol();
  context[key] = this;
  const res = args ? context[key](...args) : context[key]();
  delete context[key];
  return res;
}
