module.exports = class {
  static regex = /Pax(\.layer\( *[0-9]+ *\))?\.(module|static)\( *"([^"]+)" *\)/g;
  constructor(options = {}) {
    trace("PaxCompiler.classes.DependencyDescriptor.constructor", arguments, false);
    Object.assign(this, options);
  }
}