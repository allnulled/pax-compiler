module.exports = function(file) {
  trace("PaxCompiler.prototype.compile", arguments, false);
  return (new this.constructor.classes.Compilation(this.resolve(file), this)).start();
};