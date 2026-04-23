module.exports = class {
  static isTracing = true;
  static getTraceFunction() {
    return this.trace.bind(this);
  }
  static trace = <%- PaxBuilder.includeModuleExportsBody("pax_compiler/src/classes/Tracer/trace.js") %>;
  static debuggify = <%- PaxBuilder.includeModuleExportsBody("pax_compiler/src/classes/Tracer/debuggify.js") %>;
  static jsonify = <%- PaxBuilder.includeModuleExportsBody("pax_compiler/src/classes/Tracer/jsonify.js") %>;
};