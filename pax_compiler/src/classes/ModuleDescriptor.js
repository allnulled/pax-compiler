module.exports = class {
  constructor(options = {}) {
    trace("PaxCompiler.classes.ModuleDescriptor.constructor", arguments, false);
    Object.assign(this, { created: new Date() }, options);
  }
}