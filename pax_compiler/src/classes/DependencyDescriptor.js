module.exports = class {
  static regex = /Pax\.(sync|async)\( *"([^"]+)" *\)/g;
  constructor(options = {}) {
    trace("PaxCompiler.classes.DependencyDescriptor.constructor", arguments, false);
    Object.assign(this, options);
  }
}