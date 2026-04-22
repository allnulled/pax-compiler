module.exports = async function(target, source, compilation) {
  trace("PaxCompiler.utils.compileCssModule", arguments, false);
  new PaxCompiler.classes.ModuleDescriptor({ target, source, compilation });
};