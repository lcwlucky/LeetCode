function new() {
  const Constructor = [].shift.call(arguments)
  const obj = Object.create(Constructor.prototype)
  const r = Constructor.apply(obj, arguments)
  return r instanceof Object ? r : obj
}