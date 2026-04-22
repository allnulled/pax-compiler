module.exports = function(file) {
  trace("PaxCompiler.prototype.resolveRelative", arguments, false);
  return this.resolve(file).replace(this.basedir + "/", "");
}