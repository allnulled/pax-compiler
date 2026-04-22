module.exports = async function(target, source, compilation) {
  trace("PaxCompiler.utils.compileJsModule", arguments, false);
  // 1. Caché para no redundar módulos:
  if(target in compilation.jsModulesData) return compilation.jsModulesData[target];
  // 2. Contruir y procesar el descriptor de módulo:
  const moduleDescriptor = new PaxCompiler.classes.ModuleDescriptor({ extension: "js", target, source, compilation });
  // 3. Existe antes que sus dependencias para evitar recursividad:
  await this.registerModule(moduleDescriptor, compilation);
  // 4. Procesa enteramente (hasta persistencia) sus dependencias:
  await this.compileDependencies(moduleDescriptor, compilation);
  // 5. Se construye su propio código:
  await this.makeJsModuleSource(moduleDescriptor, compilation);
  // 6. Se marca como resuelto en la compilación:
  await this.persistModule(moduleDescriptor, compilation);
};