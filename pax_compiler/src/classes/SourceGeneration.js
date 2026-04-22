module.exports = class {
  static from(...args) {
    return new this(...args);
  }
  constructor(compilation) {
    trace("SourceGeneration.constructor");
    this.compilation = compilation;
    this.output = {
      modules: {},
      steps: [
        [], // has no dependencies
        [], // has module dependencies
        [], // has static dependencies
        [], // is entry module
      ],
      js: "",
      css: "",
    };
    this.classify();
    this.generate();
  }
  getLayerFromSubtype(subtype) {
    return subtype === "module" ? 1 : subtype === "static" ? 2 : 1;
  }
  classifyModule(key, allModules = {}) {
    trace("SourceGeneration.prototype.classifyModule");
    // Dont't repeat module nesting:
    if(key in this.output.modules) {
      return this.output.modules[key];
    }
    const value = allModules[key];
    const deps = value.metadata;
    let layer = 0;
    Iterating_dependencies:
    for (let indexDependency = 0; indexDependency < deps.length; indexDependency++) {
      const dependencyValue = deps[indexDependency];
      const { id, subtype } = dependencyValue;
      const innerLayer = this.classifyModule(id, allModules);
      layer = Math.max(innerLayer, this.getLayerFromSubtype(subtype));
      layer = this.getLayerFromSubtype(subtype);
      if (layer === 2) {
        break Iterating_dependencies;
      }
    }
    this.output.steps[layer].push(key);
    this.output.modules[key] = layer;
    return layer;
  }
  classify() {
    trace("SourceGeneration.prototype.classify");
    const { jsModulesData: allModules } = this.compilation;
    const moduleKeys = Object.keys(allModules);
    const entryModule = moduleKeys.splice(0,1)[0];
    this.output.steps[3].push(entryModule);
    this.output.modules[entryModule] = 3;
    Iterating_modules:
    for (let indexModule = 0; indexModule < moduleKeys.length; indexModule++) {
      const moduleKey = moduleKeys[indexModule];
      if(moduleKey in this.output.modules) {
        continue Iterating_modules;
      }
      this.classifyModule(moduleKey, allModules);
    }
  }
  generate() {
    trace("SourceGeneration.prototype.generate");
    this.output.js += " ";
  }
}