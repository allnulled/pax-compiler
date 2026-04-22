module.exports = function(text) {
  trace("PaxCompiler.prototype.resolveDriver", arguments, false);
  let output = text;
  const drivers = this.settings?.drivers || {};
  for(const key in drivers) {
    const value = drivers[key];
    output = text.replace(key, value);
  }
  return output;
};