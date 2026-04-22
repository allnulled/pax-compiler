module.exports = function (moduleDescriptor, compilation) {
  trace("PaxCompiler.utils.registerModule", arguments, false);
  Extend_module_metadata: {
    moduleDescriptor.metadata = compilation.compiler.constructor.utils.extractMetadataFromSource(moduleDescriptor.source, compilation);
    moduleDescriptor.isSolved = false;
  }
  Register_module_into_compilation: {
    compilation.jsModulesData[moduleDescriptor.target] = moduleDescriptor;
    compilation.jsModulesNames.push(moduleDescriptor.target);
  }
}