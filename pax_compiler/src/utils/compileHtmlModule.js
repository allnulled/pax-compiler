module.exports = async function(target, source, compilation) {
  trace("PaxCompiler.utils.compileHtmlModule", arguments, false);
  new PaxCompiler.classes.ModuleDescriptor({ target, source, compilation });
};