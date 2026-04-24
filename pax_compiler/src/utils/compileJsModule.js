module.exports = async function (target, source, compilation) {
  trace("PaxCompiler.utils.compileJsModule", arguments, false);
  // 1. Caché para no redundar módulos:
  if (target in compilation.jsModulesData) return compilation.jsModulesData[target];
  // Aquí cazamos el error porque parece que los problemas pasan por aquí
  let phase = "Creating module descriptor";
  try {
    // 2. Contruir y procesar el descriptor de módulo:
    const moduleDescriptor = new PaxCompiler.classes.ModuleDescriptor({ extension: "js", target, source, compilation });
    // 3. Existe antes que sus dependencias para evitar recursividad:
    phase = "Registering module";
    await this.registerModule(moduleDescriptor, compilation);
    // 4. Procesa enteramente (hasta persistencia) sus dependencias:
    phase = "Compiling dependencies";
    await this.compileDependencies(moduleDescriptor, compilation);
    // 6. Se marca como resuelto en la compilación:
    phase = "Persist module";
    await this.persistModule(moduleDescriptor, compilation);
  } catch (error) {
    console.error(`❌ Error compiling in phase «${phase}» in module: ${target}`);
    throw error;
  }
};