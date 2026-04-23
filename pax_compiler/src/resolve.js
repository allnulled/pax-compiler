module.exports = function(file) {
  trace("PaxCompiler.prototype.resolve", arguments, false);
  const fullpath = require("path").resolve(this.basedir, file);
  return this.resolveDriver(fullpath);
};