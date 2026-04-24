module.exports = async function(input, compilation) {
  trace("PaxCompiler.utils.compileModule", arguments, false, false);
  const target = compilation.compiler.resolveRelative(input);
  const source = target === "null" ? "module.exports = null;" : await this.fetchResource(target);
  if(target.endsWith(".js")) await this.compileJsModule(target, source, compilation);
  else if(target.endsWith(".css")) await this.compileCssModule(target, source, compilation);
  else if(target.endsWith(".html")) await this.compileHtmlModule(target, source, compilation);
  else if(target === "null") await this.compileJsModule(target, source, compilation);
  else await this.compileNormalModule(target, source, compilation);
};