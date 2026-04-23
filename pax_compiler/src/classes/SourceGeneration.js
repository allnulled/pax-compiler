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
    // Dont"t repeat module nesting:
    if (key in this.output.modules) {
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
    const entryModule = moduleKeys.splice(0, 1)[0];
    this.output.steps[3].push(entryModule);
    this.output.modules[entryModule] = 3;
    Iterating_modules:
    for (let indexModule = 0; indexModule < moduleKeys.length; indexModule++) {
      const moduleKey = moduleKeys[indexModule];
      if (moduleKey in this.output.modules) {
        continue Iterating_modules;
      }
      this.classifyModule(moduleKey, allModules);
    }
  }
  rectanglify(texto, joiner = "// ") {
    trace("SourceGeneration.prototype.rectanglify");
    const lineas = texto.split("\n");
    const maxLen = Math.max(...lineas.map(l => l.length));
    const top = "┌" + "─".repeat(maxLen + 2) + "┐";
    const bottom = "└" + "─".repeat(maxLen + 2) + "┘";
    const contenido = lineas.map(linea => {
      if (linea === "----") {
        return "├─" + "─".repeat(maxLen) + "─┤";
      }
      const padding = " ".repeat(maxLen - linea.length);
      return `│ ${linea}${padding} │`;
    });
    return joiner + [top, ...contenido, bottom].join("\n" + joiner);
  }
  sourcifySyncModule(id, counter) {
    let js = "";
    js += this.rectanglify(`@module[${counter}]: Pax.$modules["${id}"]`) + "\n";
    js += `  (function(module) {\n`;
    js += `    try {\n`;
    js += this.tabify(this.compilation.jsModulesData[id].source, 6);
    js += `\n    } finally {\n`;
    js += `      Pax.$modules["${id}"] = module.exports;\n`;
    js += `    }\n`;
    js += `  })({ exports: undefined });\n`;
    return js;
  }
  tabify(texto, len = 4) {
    trace("SourceGeneration.prototype.tabify");
    return texto.split("\n").map(line => " ".repeat(len) + line).join("\n");
  }
  generate() {
    trace("SourceGeneration.prototype.generate");
    let header = "";
    Header_comment: {
      header += "Pax module";
      header += "\n----";
      let counter = 1;
      const allSteps = this.output.steps;
      Iterating_steps:
      for (let indexStep = 0; indexStep < allSteps.length; indexStep++) {
        const step = allSteps[indexStep];
        if (!step.length) {
          continue Iterating_steps;
        }
        header += `\n+ Loading wave ${indexStep + 1}/4:`;
        for (let indexModule = 0; indexModule < step.length; indexModule++) {
          const mod = step[indexModule];
          header += `\n  · [${counter++}] ${mod}`;
        }
      }
      header = this.rectanglify(header) + "\n";
    }
    let globalPax = function (content) {
      let api = "";
      api += `(function(Pax) {\n`;
      api += `${content}`;
      api += `})(typeof Pax !== "undefined" ? Pax : `;
      api += <%- PaxBuilder.prettyLines(PaxBuilder.includeModuleExportsBody("pax_compiler/Pax.js"), ";\napi += ") %>;
      api += `);`;
      return api;
    }
    let js = '';
    Js_content: {
      const allSteps = this.output.steps;
      let counter = 1;
      for(let indexStep=0; indexStep<allSteps.length; indexStep++) {
        const step = allSteps[indexStep];
        const sourcify = step === 2 ? this.sourcifySyncModule.bind(this) : this.sourcifySyncModule.bind(this);
        for(let indexModule=0; indexModule<step.length; indexModule++) {
          const moduleId = step[indexModule];
          js += sourcify(moduleId, counter++);
        }
      }
    }
    this.output.js += header;
    this.output.js += globalPax(js);
  }
}