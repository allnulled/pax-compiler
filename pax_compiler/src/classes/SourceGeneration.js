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
    return subtype === "sync" ? 1 : subtype === "async" ? 2 : 0;
  }
  classifyModule(key, allModules = {}) {
    trace("SourceGeneration.prototype.classifyModule");
    // Don't repeat module nesting:
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
      const currentLayer = this.getLayerFromSubtype(subtype);
      layer = Math.max(innerLayer, currentLayer);
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
    trace("SourceGeneration.prototype.sourcifySyncModule");
    let js = "";
    js += this.rectanglify(`@module[${counter}]: Pax.modules["${id}"]`) + "\n";
    js += `  (function(module) {\n`;
    js += `    try {\n`;
    js += this.tabify(this.compilation.jsModulesData[id].source, 6);
    js += `\n    } finally {\n`;
    js += `      Pax.modules[module.id] = module.exports;\n`;
    js += `    }\n`;
    js += `\n})({ exports: undefined, id: "${id}" });\n`;
    return js;
  }
  sourcifyAsyncModule(id, counter, isEntry = false) {
    trace("SourceGeneration.prototype.sourcifyAsyncModule");
    let js = "";
    let depsJs = "";
    const moduleData = this.compilation.jsModulesData[id];
    if (!isEntry) {
      const deps = moduleData.metadata;
      for (let indexDep = 0; indexDep < deps.length; indexDep++) {
        const dep = deps[indexDep];
        depsJs += `\n      Pax.promises["${dep.id}"],`;
      }
    } else {
      const allAsyncModules = this.output.steps[2];
      for(let indexDep=0; indexDep<allAsyncModules.length; indexDep++) {
        const dep = allAsyncModules[indexDep];
        depsJs += `\n      Pax.promises["${dep}"],`;
      }
    }
    js += this.rectanglify(`@module[${counter}]: (async) Pax.modules["${id}"]`);
    js += `\nPax.promises["${id}"] = Pax.modules["${id}"] = (async function(module) {`;
    js += `\n  try {`;
    js += `\n    await Promise.all([`;
    js += depsJs;
    js += `\n    ]);\n`;
    js += this.tabify(moduleData.source, 4);
    js += `\n  } finally {`;
    js += `\n    return Pax.modules[module.id] = module.exports;`;
    js += `\n  }`;
    js += `\n})({ exports: undefined, id: "${id}" });\n`;
    return js;
  }
  sourcifyEntryModule(id, counter) {
    trace("SourceGeneration.prototype.sourcifyEntryModule");
    const hasAsyncModules = this.output.steps[2].length;
    if (hasAsyncModules) {
      return this.sourcifyAsyncModule(id, counter, true);
    } else {
      return this.sourcifySyncModule(id, counter);
    }
  }
  tabify(texto, len = 4) {
    trace("SourceGeneration.prototype.tabify");
    return texto.split("\n").map(line => " ".repeat(len) + line).join("\n");
  }
  padLeft(text, len = 4, filler = "0") {
    trace("SourceGeneration.prototype.padLeft");
    let out = "" + text;
    while (out.length <= len) {
      out = filler + out;
    }
    return out;
  }
  generate() {
    trace("SourceGeneration.prototype.generate");
    const bundleHeader = () => {
      let header = "";
      let summatory = '';
      let totalModules = this.output.steps.reduce((out, it, i) => {
        const word = i === 0 ? "free" : i === 1 ? "sync" : i === 2 ? "async" : i === 3 ? "entry" : "";
        summatory += ((summatory.length === 0) ? "" : " + ") + `${word}(${it.length})`;
        return out + it.length;
      }, 0);
      header += `! Pax bundle from: ${summatory + " = " + totalModules} modules`;
      header += "\n----\n";
      header += `Started at:   ${this.compilation.startedAnalysis}\n`;
      header += `Finished at:  ${this.compilation.finishedAnalysis}\n`;
      header += `Took:         ${this.compilation.analysisDuration} milliseconds`;
      let counter = 1;
      const allSteps = this.output.steps;
      const maxDigits = (allSteps.length + "").length;
      Iterating_steps:
      for (let indexStep = 0; indexStep < allSteps.length; indexStep++) {
        const step = allSteps[indexStep];
        if (!step.length) {
          continue Iterating_steps;
        }
        header += `\n----\nWave ${indexStep + 1}/4: ${step.length} modules\n----`;
        for (let indexModule = 0; indexModule < step.length; indexModule++) {
          const mod = step[indexModule];
          header += `\n  · [${this.padLeft(counter++, maxDigits)}] ${mod}`;
        }
      }
      header = this.rectanglify(header) + "\n";
      return header;
    };
    let globalPax = (content, settings) => {
      let api = "";
      api += `(function(Pax) {\n`;
      api += `${content}`;
      api += this.rectanglify("Pax Minimal API") + "\n";
      api += `})(typeof Pax !== "undefined" ? Pax : `;
      api += <%- JSON.stringify(PaxBuilder.includeModuleExportsBody("pax_compiler/Pax.js")) %>.replace("__SETTINGS__", JSON.stringify(settings));
      api += `);`;
      return api;
    }
    let body = '';
    Js_content: {
      const allSteps = this.output.steps;
      let counter = 1;
      for (let indexStep = 0; indexStep < allSteps.length; indexStep++) {
        const step = allSteps[indexStep];
        const sourcify = (() => {
          if(indexStep < 2) return this.sourcifySyncModule.bind(this);
          if(indexStep === 2) return this.sourcifyAsyncModule.bind(this);
          if(indexStep === 3) return this.sourcifyEntryModule.bind(this)
          return this.sourcifySyncModule.bind(this);
        })();
        for (let indexModule = 0; indexModule < step.length; indexModule++) {
          const moduleId = step[indexModule];
          // Wrap syncrono y wrap asincrono
          body += sourcify(moduleId, counter++, false);
        }
      }
    }
    this.output.js += bundleHeader();
    this.output.js += globalPax(body, this.compilation.compiler.settings || {});
  }
}