module.exports = function(file) {
  trace("PaxCompiler.prototype.resolve", arguments, false);
  return this.resolveDriver(require("path").resolve(this.basedir, file));
};