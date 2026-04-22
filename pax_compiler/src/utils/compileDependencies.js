module.exports = async function(moduleDescriptor, compilation) {
  trace("PaxCompiler.utils.compileDependencies", arguments, false);
  for(let dependencyDescriptor of moduleDescriptor.metadata) {
    PaxCompiler.assert(dependencyDescriptor.type === "Pax/dependency", {
      method: "PaxCompiler.utils.compileDependencies",
      message: "For now only «type» as «Pax/dependency» is a valid type"
    });
    await PaxCompiler.utils.compileModule(dependencyDescriptor.id, compilation);
  }
};