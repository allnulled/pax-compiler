module.exports = class {
  constructor(file, compiler) {
    trace("PaxCompiler.classes.Compilation.constructor", arguments, false);
    Object.assign(this, {
      input: file,
      target: compiler.resolve(file),
      resource: compiler.resolveRelative(file),
      compiler,
      jsModulesData: {},
      jsModulesNames: [],
      cssModulesData: {},
      cssModulesNames: [],
      allModulesByOrder: [],
      jsSource: "",
      cssSource: "",
      created: new Date(),
      started: null,
      finished: null,
      milliseconds: null,
      state: "created",
    });
  }
  progression = ["created", "started", "completed"];
  start = <%- PaxBuilder.includeModuleExportsBody("pax_compiler/src/classes/Compilation/start.js") %>
};