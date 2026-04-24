(function (factory) {
  const mod = factory();
  if (typeof window !== 'undefined') {
    window['PaxCompiler'] = mod;
  }
  if (typeof global !== 'undefined') {
    global['PaxCompiler'] = mod;
  }
  if (typeof module !== 'undefined') {
    module.exports = mod;
  }
})(function () {
  const die = (...args) => { console.log(...args); process.exit(0); };
  const PaxTracer = <%- PaxBuilder.includeModuleExportsBody("pax_compiler/PaxTracer.js") %>;
  const trace = PaxTracer.getTraceFunction();
  const PaxCompiler = class {
    static create(...args) {
      trace("PaxCompiler.create");
      return new this(...args);
    }
    constructor() {
      trace("PaxCompiler.constructor");
      this.basedir = <%- JSON.stringify(path.resolve(__dirname)) %>;
    }
    static assert = <%- PaxBuilder.includeModuleExportsBody("pax_compiler/src/assert.js") %>;
    static classes = {
      ErrorData: <%- PaxBuilder.includeModuleExportsBody("pax_compiler/src/classes/ErrorData.js") %>,
      Compilation: <%- PaxBuilder.includeModuleExportsBody("pax_compiler/src/classes/Compilation.js") %>,
      DependencyDescriptor: <%- PaxBuilder.includeModuleExportsBody("pax_compiler/src/classes/DependencyDescriptor.js") %>,
      ModuleDescriptor: <%- PaxBuilder.includeModuleExportsBody("pax_compiler/src/classes/ModuleDescriptor.js") %>,
      SourceGeneration: <%- PaxBuilder.includeModuleExportsBody("pax_compiler/src/classes/SourceGeneration.js") %>,
    }
    static utils = {
      surroundTextAscii: <%- PaxBuilder.includeModuleExportsBody("pax_compiler/src/utils/surroundTextAscii.js") %>,
      compileModule: <%- PaxBuilder.includeModuleExportsBody("pax_compiler/src/utils/compileModule.js") %>,
      compileJsModule: <%- PaxBuilder.includeModuleExportsBody("pax_compiler/src/utils/compileJsModule.js") %>,
      compileCssModule: <%- PaxBuilder.includeModuleExportsBody("pax_compiler/src/utils/compileCssModule.js") %>,
      compileHtmlModule: <%- PaxBuilder.includeModuleExportsBody("pax_compiler/src/utils/compileHtmlModule.js") %>,
      compileNormalModule: <%- PaxBuilder.includeModuleExportsBody("pax_compiler/src/utils/compileNormalModule.js") %>,
      compileDependencies: <%- PaxBuilder.includeModuleExportsBody("pax_compiler/src/utils/compileDependencies.js") %>,
      registerModule: <%- PaxBuilder.includeModuleExportsBody("pax_compiler/src/utils/registerModule.js") %>,
      persistModule: <%- PaxBuilder.includeModuleExportsBody("pax_compiler/src/utils/persistModule.js") %>,
      fetchResource: <%- PaxBuilder.includeModuleExportsBody("pax_compiler/src/utils/fetchResource.js") %>,
      indentText: <%- PaxBuilder.includeModuleExportsBody("pax_compiler/src/utils/indentText.js") %>,
      extractMetadataFromSource: <%- PaxBuilder.includeModuleExportsBody("pax_compiler/src/utils/extractMetadataFromSource.js") %>,
      generateSources: <%- PaxBuilder.includeModuleExportsBody("pax_compiler/src/utils/generateSources.js") %>,
    }
    assert = <%- PaxBuilder.includeModuleExportsBody("pax_compiler/src/assert.js") %>;
    resolveDriver = <%- PaxBuilder.includeModuleExportsBody("pax_compiler/src/resolveDriver.js") %>;
    resolve = <%- PaxBuilder.includeModuleExportsBody("pax_compiler/src/resolve.js") %>;
    resolveRelative = <%- PaxBuilder.includeModuleExportsBody("pax_compiler/src/resolveRelative.js") %>;
    loadSettings = <%- PaxBuilder.includeModuleExportsBody("pax_compiler/src/loadSettings.js") %>;
    compile = <%- PaxBuilder.includeModuleExportsBody("pax_compiler/src/compile.js") %>;
  };
  PaxCompiler.global = PaxCompiler.create();
  return PaxCompiler;
});