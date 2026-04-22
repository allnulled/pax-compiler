module.exports = function(compilation) {
  trace("PaxCompiler.utils.generateSources", arguments, false);
  compilation.output = PaxCompiler.classes.SourceGeneration.from(compilation).output;
};