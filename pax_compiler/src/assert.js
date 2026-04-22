module.exports = function(condition, errorData = {}) {
  trace("PaxCompiler.prototype.assert", arguments, false);
  if(!condition) throw new this.classes.ErrorData(errorData);
};