function call() {
  let [context, ...args] = [...arguments];
  if (typeof this !== 'function') {
    throw new Error();
  }
  context = context || null;
  const key = Symbol();
  context[key] = this;
  const res = context[key](...args);
  delete context[key];
  return res;
}
