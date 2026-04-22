module.exports = function(moduleDescriptor, compilation) {
  trace("PaxCompiler.utils.persistModule", arguments, false);
  Register_module_into_compilation: {
    moduleDescriptor.isSolved = true;
  }
}