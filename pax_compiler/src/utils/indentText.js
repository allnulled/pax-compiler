module.exports = function(spaces = 2, text) {
  trace("PaxCompiler.prototype.indexText");
  return text.split("\n").join("\n" + " ".repeat(spaces));
}