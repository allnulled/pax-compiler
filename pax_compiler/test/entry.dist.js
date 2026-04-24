// ┌──────────────────────────────────────────────────────────────────────────────────────────────────────────┐
// │ ! Pax bundle from: free(7) + sync(2) + async(5) + entry(1) = 15 modules                                  │
// ├──────────────────────────────────────────────────────────────────────────────────────────────────────────┤
// │ Started at:   2026/04/24 13:03:57.861                                                                    │
// │ Finished at:  2026/04/24 13:03:57.872                                                                    │
// │ Took:         11 milliseconds                                                                            │
// ├──────────────────────────────────────────────────────────────────────────────────────────────────────────┤
// │ Wave 1/4: 7 modules                                                                                      │
// ├──────────────────────────────────────────────────────────────────────────────────────────────────────────┤
// │   · [01] pax_compiler/test/topics/001. Sorts modules and respects asynchronicity/mod1/sync-mod-1.1.js    │
// │   · [02] pax_compiler/test/topics/001. Sorts modules and respects asynchronicity/mod1/sync-mod-1.2.js    │
// │   · [03] pax_compiler/test/topics/001. Sorts modules and respects asynchronicity/mod2/sync-mod-2.1.js    │
// │   · [04] pax_compiler/test/topics/001. Sorts modules and respects asynchronicity/mod2/async-mod-2.2.1.js │
// │   · [05] null                                                                                            │
// │   · [06] pax_compiler/test/utils/assertion.js                                                            │
// │   · [07] pax_modules/pax/pax-compiler.dist.js                                                            │
// ├──────────────────────────────────────────────────────────────────────────────────────────────────────────┤
// │ Wave 2/4: 2 modules                                                                                      │
// ├──────────────────────────────────────────────────────────────────────────────────────────────────────────┤
// │   · [08] pax_compiler/test/topics/001. Sorts modules and respects asynchronicity/mod1.js                 │
// │   · [09] pax_compiler/test/topics/002. Can use drivers from modules/test.js                              │
// ├──────────────────────────────────────────────────────────────────────────────────────────────────────────┤
// │ Wave 3/4: 5 modules                                                                                      │
// ├──────────────────────────────────────────────────────────────────────────────────────────────────────────┤
// │   · [10] pax_compiler/test/topics/001. Sorts modules and respects asynchronicity/test.js                 │
// │   · [11] pax_compiler/test/topics/001. Sorts modules and respects asynchronicity/mod2/async-mod-2.2.js   │
// │   · [12] pax_compiler/test/topics/001. Sorts modules and respects asynchronicity/mod2.js                 │
// │   · [13] pax_compiler/test/topics/001. Sorts modules and respects asynchronicity/mod3/async-mod-3.1.js   │
// │   · [14] pax_compiler/test/topics/001. Sorts modules and respects asynchronicity/mod3.js                 │
// ├──────────────────────────────────────────────────────────────────────────────────────────────────────────┤
// │ Wave 4/4: 1 modules                                                                                      │
// ├──────────────────────────────────────────────────────────────────────────────────────────────────────────┤
// │   · [15] pax_compiler/test/entry.made.js                                                                 │
// └──────────────────────────────────────────────────────────────────────────────────────────────────────────┘
(function(Pax) {
// ┌─────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────┐
// │ @module[1]: Pax.modules["pax_compiler/test/topics/001. Sorts modules and respects asynchronicity/mod1/sync-mod-1.1.js"] │
// └─────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────┘
  (function(module) {
    try {
      module.exports = 800;
    } finally {
      Pax.modules[module.id] = module.exports;
    }

})({ exports: undefined, id: "pax_compiler/test/topics/001. Sorts modules and respects asynchronicity/mod1/sync-mod-1.1.js" });
// ┌─────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────┐
// │ @module[2]: Pax.modules["pax_compiler/test/topics/001. Sorts modules and respects asynchronicity/mod1/sync-mod-1.2.js"] │
// └─────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────┘
  (function(module) {
    try {
      module.exports = 600;
    } finally {
      Pax.modules[module.id] = module.exports;
    }

})({ exports: undefined, id: "pax_compiler/test/topics/001. Sorts modules and respects asynchronicity/mod1/sync-mod-1.2.js" });
// ┌─────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────┐
// │ @module[3]: Pax.modules["pax_compiler/test/topics/001. Sorts modules and respects asynchronicity/mod2/sync-mod-2.1.js"] │
// └─────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────┘
  (function(module) {
    try {
      module.exports = 801;
    } finally {
      Pax.modules[module.id] = module.exports;
    }

})({ exports: undefined, id: "pax_compiler/test/topics/001. Sorts modules and respects asynchronicity/mod2/sync-mod-2.1.js" });
// ┌────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────┐
// │ @module[4]: Pax.modules["pax_compiler/test/topics/001. Sorts modules and respects asynchronicity/mod2/async-mod-2.2.1.js"] │
// └────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────┘
  (function(module) {
    try {
      module.exports = 402;
    } finally {
      Pax.modules[module.id] = module.exports;
    }

})({ exports: undefined, id: "pax_compiler/test/topics/001. Sorts modules and respects asynchronicity/mod2/async-mod-2.2.1.js" });
// ┌─────────────────────────────────┐
// │ @module[5]: Pax.modules["null"] │
// └─────────────────────────────────┘
  (function(module) {
    try {
      module.exports = null;
    } finally {
      Pax.modules[module.id] = module.exports;
    }

})({ exports: undefined, id: "null" });
// ┌─────────────────────────────────────────────────────────────────┐
// │ @module[6]: Pax.modules["pax_compiler/test/utils/assertion.js"] │
// └─────────────────────────────────────────────────────────────────┘
  (function(module) {
    try {
      module.exports = function(condition, message) {
        if(!condition) throw new Error(message);
      }
    } finally {
      Pax.modules[module.id] = module.exports;
    }

})({ exports: undefined, id: "pax_compiler/test/utils/assertion.js" });
// ┌─────────────────────────────────────────────────────────────────┐
// │ @module[7]: Pax.modules["pax_modules/pax/pax-compiler.dist.js"] │
// └─────────────────────────────────────────────────────────────────┘
  (function(module) {
    try {
      (function(factory) {
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
      })(function() {
        const die = (...args) => {
          console.log(...args);
          process.exit(0);
        };
        const PaxTracer = class {
          static isTracing = true;
          static getTraceFunction() {
            return this.trace.bind(this);
          }
          static hasTraceFilters = ("").split("|").filter(it => it !== "");
          static hasTraceDebuggers = ("").split("|").filter(it => it !== "");
          static trace = function(method, args = [], force = false, showValues = false) {
            if ((!PaxTracer.isTracing) && (!force)) return false;
            let isMatchedByDebuggers = false;
            Debugger_layer: {
              if (!PaxTracer.hasTraceDebuggers.length) break Debugger_layer;
              if (PaxTracer.hasTraceDebuggers[0] === "*") {
                isMatchedByDebuggers = true;
                break Debugger_layer;
              }
              if (PaxTracer.hasTraceDebuggers.length) {
                for (let index = 0; index < PaxTracer.hasTraceDebuggers.length; index++) {
                  const filter = PaxTracer.hasTraceDebuggers[index];
                  const pos = method.indexOf(filter);
                  if (pos !== -1) {
                    isMatchedByDebuggers = true;
                    break Debugger_layer;
                  }
                }
                isMatchedByDebuggers = false;
              }
            }
            const shouldDebug = showValues || isMatchedByDebuggers;
            let msg = `[trace][pax-compiler] ${method} +${args.length}=[`;
            for (let index = 0; index < args.length; index++) {
              const arg = args[index];
              if (shouldDebug) {
                msg += (index === 0 ? "" : ",") + "\n  " + `${index}:${typeof (arg)}=${PaxTracer.debuggify(arg)}`;
              } else {
                msg += (index === 0 ? "" : ",") + `${index}:${typeof (arg)}`;
              }
            }
            msg += `]`;
            Filter_layer: {
              if (!PaxTracer.hasTraceFilters.length) {
                break Filter_layer;
              }
              if (PaxTracer.hasTraceFilters[0] === "*") {
                break Filter_layer;
              }
              for (let index = 0; index < PaxTracer.hasTraceFilters.length; index++) {
                const filter = PaxTracer.hasTraceFilters[index];
                if (msg.indexOf(filter) !== -1) {
                  break Filter_layer;
                }
              }
              return false;
            }
            console.log(msg);
          };
          static debuggify = function(data) {
            if (data === null) return "null";
            if (typeof data === "object") {
              try {
                return this.jsonify(data);
              } catch (error) {
                return "(not stringifiable) *" + Object.keys(data).length + " props";
              }
            }
            if (typeof data === "function") {
              return "*" + data.toString().length + " chars";
            }
            if (typeof data === "string") {
              // @TOREMOVE: Límite de caracteres para no llenar la consola:
              // return JSON.stringify(data.substr(0, 30) + (data.length <= 30 ? "" : "..."));
            }
            return data;
          };
          static jsonify = function(obj, space = 2) {
            const seen = new WeakSet();
            return JSON.stringify(obj, (key, value) => {
              if (typeof value === 'object' && value !== null) {
                if (seen.has(value)) {
                  return '[Circular]';
                }
                seen.add(value);
              }
              return value;
            }, space);
          };
        };
        const trace = PaxTracer.getTraceFunction();
        const PaxCompiler = class {
          static create(...args) {
            trace("PaxCompiler.create");
            return new this(...args);
          }
          constructor() {
            trace("PaxCompiler.constructor");
            this.basedir = "/home/carlos/Escritorio/Programas/pax-compiler";
          }
          static assert = function(condition, errorData = {}) {
            trace("PaxCompiler.prototype.assert", arguments, false);
            if (!condition) throw new this.classes.ErrorData(errorData);
          };
          static classes = {
            ErrorData: class extends Error {
              constructor(data) {
                super(typeof data === "string" ? data : JSON.stringify(data));
                trace("PaxCompiler.classes.ErrorData.constructor", arguments, false);
                this.data = typeof data !== "object" ? {
                  value: data
                } : data;
                this.name = "ErrorData";
              }
            },
            Compilation: class {
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
              formatDate = function(date) {
                const pad = (n, size = 2) => String(n).padStart(size, '0');
                const year = date.getFullYear();
                const month = pad(date.getMonth() + 1); // 0-11
                const day = pad(date.getDate());
                const hours = pad(date.getHours());
                const minutes = pad(date.getMinutes());
                const seconds = pad(date.getSeconds());
                const ms = pad(date.getMilliseconds(), 3);
                return `${year}/${month}/${day} ${hours}:${minutes}:${seconds}.${ms}`;
              }
              start = async function() {
                trace("PaxCompiler.classes.Compilation.prototype.start", arguments, false);
                // 1. Create
                const date1 = new Date();
                this.started = this.formatDate(date1);
                this.startedAnalysis = this.started;
                this.compiler.assert(this.state === "created", {
                  message: `Compilation instance cannot call method «start» in «${this.state}» state, only in «created» state`,
                  method: "PaxCompler.classes.Compilation.prototype.start",
                  on: "this.state"
                });
                // 2. Analyze
                this.state = "analyzing modules";
                await this.compiler.constructor.utils.compileModule(this.target, this);
                const date2 = new Date();
                this.finishedAnalysis = this.formatDate(date2);
                this.analysisDuration = date2 - date1;
                // 3. Generate
                this.state = "generating code";
                await this.compiler.constructor.utils.generateSources(this);
                const date3 = new Date();
                this.finishedGeneration = this.formatDate(date3);
                this.finished = this.finishedGeneration;
                this.analysisDuration = date3 - date2;
                this.milliseconds = this.started - this.finished;
                // 4. Return
                this.state = "completed";
                return this;
              }
            },
            DependencyDescriptor: class {
              static regex = /Pax\.(sync|async)\( *"([^"]+)" *\)/g;
              constructor(options = {}) {
                trace("PaxCompiler.classes.DependencyDescriptor.constructor", arguments, false);
                Object.assign(this, options);
              }
            },
            ModuleDescriptor: class {
              constructor(options = {}) {
                trace("PaxCompiler.classes.ModuleDescriptor.constructor", arguments, false);
                Object.assign(this, {
                  created: new Date()
                }, options);
              }
            },
            SourceGeneration: class {
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
              classifyModule(keyInCode, allModules = {}) {
                trace("SourceGeneration.prototype.classifyModule");
                // Don't repeat module nesting:
                const key = this.compilation.compiler.resolveDriver(keyInCode);
                console.log(key);
                if (key in this.output.modules) {
                  return this.output.modules[key];
                }
                const value = allModules[key];
                const deps = value.metadata;
                let layer = 0;
                Iterating_dependencies:
                  for (let indexDependency = 0; indexDependency < deps.length; indexDependency++) {
                    const dependencyValue = deps[indexDependency];
                    const {
                      id,
                      subtype
                    } = dependencyValue;
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
                const {
                  jsModulesData: allModules
                } = this.compilation;
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
                  for (let indexDep = 0; indexDep < allAsyncModules.length; indexDep++) {
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
                  api += "{\n  modules: {},\n  promises: {},\n  settings: __SETTINGS__,\n  resolveDriver: function(text) {\n    let output = text;\n    const drivers = this.settings?.drivers || {};\n    for(const key in drivers) {\n      const value = drivers[key];\n      output = text.replace(key, value);\n    }\n    return output;\n  },\n  find: function(id) {\n    const normalizedId = this.resolveDriver(id);\n    if(!(normalizedId in this.modules)) {\n      throw new Error(`Module not found by Pax: «${normalizedId}»`);\n    }\n    return this.modules[normalizedId];\n  },\n  sync: function(id) {\n    return this.find(id);\n  },\n  async: function(id) {\n    return this.find(id);\n  },\n}".replace("__SETTINGS__", JSON.stringify(settings));
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
                      if (indexStep < 2) return this.sourcifySyncModule.bind(this);
                      if (indexStep === 2) return this.sourcifyAsyncModule.bind(this);
                      if (indexStep === 3) return this.sourcifyEntryModule.bind(this)
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
            },
          }
          static utils = {
            surroundTextAscii: function(text, linePrepend = "// ", lineOffset = 0) {
              let max = 0;
              const lines = text.split("\n");
              lines.forEach(line => {
                if (line.length > max) max = line.length;
              });
              let out = "";
              out += linePrepend + "┌" + "─".repeat(max + 2) + "┐\n";
              out += lines.map(line => {
                if (line === "----") {
                  return `${linePrepend}├─${"─".repeat(max + lineOffset)}─┤`;
                }
                return `${linePrepend}│ ${line.padEnd(max + lineOffset, " ")} │`;
              }).join("\n") + "\n";
              out += linePrepend + "└" + "─".repeat(max + 2) + "┘\n";
              return out;
            },
            compileModule: async function(input, compilation) {
              trace("PaxCompiler.utils.compileModule", arguments, false, false);
              const target = compilation.compiler.resolveRelative(input);
              const source = target === "null" ? "module.exports = null;" : await this.fetchResource(target);
              if (target.endsWith(".js")) await this.compileJsModule(target, source, compilation);
              else if (target.endsWith(".css")) await this.compileCssModule(target, source, compilation);
              else if (target.endsWith(".html")) await this.compileHtmlModule(target, source, compilation);
              else if (target === "null") await this.compileJsModule(target, source, compilation);
              else await this.compileNormalModule(target, source, compilation);
            },
            compileJsModule: async function(target, source, compilation) {
              trace("PaxCompiler.utils.compileJsModule", arguments, false);
              // 1. Caché para no redundar módulos:
              if (target in compilation.jsModulesData) return compilation.jsModulesData[target];
              // Aquí cazamos el error porque parece que los problemas pasan por aquí
              let phase = "Creating module descriptor";
              try {
                // 2. Contruir y procesar el descriptor de módulo:
                const moduleDescriptor = new PaxCompiler.classes.ModuleDescriptor({
                  extension: "js",
                  target,
                  source,
                  compilation
                });
                // 3. Existe antes que sus dependencias para evitar recursividad:
                phase = "Registering module";
                await this.registerModule(moduleDescriptor, compilation);
                // 4. Procesa enteramente (hasta persistencia) sus dependencias:
                phase = "Compiling dependencies";
                await this.compileDependencies(moduleDescriptor, compilation);
                // 6. Se marca como resuelto en la compilación:
                phase = "Persist module";
                await this.persistModule(moduleDescriptor, compilation);
              } catch (error) {
                console.error(`❌ Error compiling in phase «${phase}» in module: ${target}`);
                throw error;
              }
            },
            compileCssModule: async function(target, source, compilation) {
              trace("PaxCompiler.utils.compileCssModule", arguments, false);
              new PaxCompiler.classes.ModuleDescriptor({
                target,
                source,
                compilation
              });
            },
            compileHtmlModule: async function(target, source, compilation) {
              trace("PaxCompiler.utils.compileHtmlModule", arguments, false);
              new PaxCompiler.classes.ModuleDescriptor({
                target,
                source,
                compilation
              });
            },
            compileNormalModule: async function(target, source, compilation) {
              trace("PaxCompiler.utils.compileNormalModule", arguments, false);
      
            },
            compileDependencies: async function(moduleDescriptor, compilation) {
              trace("PaxCompiler.utils.compileDependencies", arguments, false);
              for (let dependencyDescriptor of moduleDescriptor.metadata) {
                PaxCompiler.assert(dependencyDescriptor.type === "Pax/dependency", {
                  method: "PaxCompiler.utils.compileDependencies",
                  message: "For now only «type» as «Pax/dependency» is a valid type"
                });
                await PaxCompiler.utils.compileModule(dependencyDescriptor.id, compilation);
              }
            },
            registerModule: function(moduleDescriptor, compilation) {
              trace("PaxCompiler.utils.registerModule", arguments, false);
              Extend_module_metadata: {
                moduleDescriptor.metadata = compilation.compiler.constructor.utils.extractMetadataFromSource(moduleDescriptor.source, compilation);
                moduleDescriptor.isSolved = false;
              }
              Register_module_into_compilation: {
                compilation.jsModulesData[moduleDescriptor.target] = moduleDescriptor;
                compilation.jsModulesNames.push(moduleDescriptor.target);
              }
            },
            persistModule: function(moduleDescriptor, compilation) {
              trace("PaxCompiler.utils.persistModule", arguments, false);
              Register_module_into_compilation: {
                moduleDescriptor.isSolved = true;
              }
            },
            fetchResource: function(file) {
              trace("PaxCompiler.utils.fetchResource", arguments, false);
              return require("fs").promises.readFile(file, "utf8").catch(error => {
                console.error("Failed to fetch resource: " + file);
                throw error;
              });
            },
            indentText: function(spaces = 2, text) {
              trace("PaxCompiler.prototype.indexText");
              return text.split("\n").join("\n" + " ".repeat(spaces));
            },
            extractMetadataFromSource: function(source, compilation) {
              trace("PaxCompiler.utils.extractMetadataFromSource", arguments, false);
              const regexMatches = source.matchAll(compilation.compiler.constructor.classes.DependencyDescriptor.regex);
              const matches = [];
              let counter = 0;
              Extract_matches:
                for (let it of regexMatches) {
                  const [match, ...groups] = it;
                  const refModule = groups[1];
                  const subtype = groups[0];
                  const item = new compilation.compiler.constructor.classes.DependencyDescriptor({
                    type: "Pax/dependency",
                    subtype,
                    id: refModule,
                    match,
                    count: counter++,
                    size: match.length,
                    pos: it.index,
                  });
                  matches.push(item);
                }
              return matches;
            },
            generateSources: function(compilation) {
              trace("PaxCompiler.utils.generateSources", arguments, false);
              compilation.output = PaxCompiler.classes.SourceGeneration.from(compilation).output;
            },
          }
          assert = function(condition, errorData = {}) {
            trace("PaxCompiler.prototype.assert", arguments, false);
            if (!condition) throw new this.classes.ErrorData(errorData);
          };
          resolveDriver = function(text) {
            trace("PaxCompiler.prototype.resolveDriver", arguments, false);
            let output = text;
            const drivers = this.settings?.drivers || {};
            for (const key in drivers) {
              const value = drivers[key];
              output = text.replace(key, value);
            }
            return output;
          };
          resolve = function(file) {
            trace("PaxCompiler.prototype.resolve", arguments, false);
            const fullpath = require("path").resolve(this.basedir, file);
            return this.resolveDriver(fullpath);
          };
          resolveRelative = function(file) {
            trace("PaxCompiler.prototype.resolveRelative", arguments, false);
            return this.resolve(file).replace(this.basedir + "/", "");
          };
          loadSettings = async function(force = false) {
            trace("PaxCompiler.prototype.loadSettings", arguments, false);
            if (this.settings && (!force)) {
              return this.settings;
            }
            const settingsJson = await this.constructor.utils.fetchResource("pax_settings.json");
            const settings = JSON.parse(settingsJson);
            this.settings = settings;
            return this.settings;
          };
          compile = function(file) {
            trace("PaxCompiler.prototype.compile", arguments, false);
            return (new this.constructor.classes.Compilation(this.resolve(file), this)).start();
          };
        };
        PaxCompiler.global = PaxCompiler.create();
        return PaxCompiler;
      });
    } finally {
      Pax.modules[module.id] = module.exports;
    }

})({ exports: undefined, id: "pax_modules/pax/pax-compiler.dist.js" });
// ┌────────────────────────────────────────────────────────────────────────────────────────────────────────────┐
// │ @module[8]: Pax.modules["pax_compiler/test/topics/001. Sorts modules and respects asynchronicity/mod1.js"] │
// └────────────────────────────────────────────────────────────────────────────────────────────────────────────┘
  (function(module) {
    try {
      const one = Pax.sync("pax_compiler/test/topics/001. Sorts modules and respects asynchronicity/mod1/sync-mod-1.1.js");
      const two = Pax.sync("pax_compiler/test/topics/001. Sorts modules and respects asynchronicity/mod1/sync-mod-1.2.js");
      
      module.exports = { one, two };
    } finally {
      Pax.modules[module.id] = module.exports;
    }

})({ exports: undefined, id: "pax_compiler/test/topics/001. Sorts modules and respects asynchronicity/mod1.js" });
// ┌───────────────────────────────────────────────────────────────────────────────────────────────┐
// │ @module[9]: Pax.modules["pax_compiler/test/topics/002. Can use drivers from modules/test.js"] │
// └───────────────────────────────────────────────────────────────────────────────────────────────┘
  (function(module) {
    try {
      const assertion = Pax.sync("pax_compiler/test/utils/assertion.js");
      const PaxCompiler = Pax.sync("{@}/pax/pax-compiler.dist.js");
      
      assertion(typeof PaxCompiler === "function", "PaxCompiler reached through driver shortcut {@} should return PaxCompiler global class");
    } finally {
      Pax.modules[module.id] = module.exports;
    }

})({ exports: undefined, id: "pax_compiler/test/topics/002. Can use drivers from modules/test.js" });
// ┌─────────────────────────────────────────────────────────────────────────────────────────────────────────────────────┐
// │ @module[10]: (async) Pax.modules["pax_compiler/test/topics/001. Sorts modules and respects asynchronicity/test.js"] │
// └─────────────────────────────────────────────────────────────────────────────────────────────────────────────────────┘
Pax.promises["pax_compiler/test/topics/001. Sorts modules and respects asynchronicity/test.js"] = Pax.modules["pax_compiler/test/topics/001. Sorts modules and respects asynchronicity/test.js"] = (async function(module) {
  try {
    await Promise.all([
      Pax.promises["pax_compiler/test/topics/001. Sorts modules and respects asynchronicity/mod1.js"],
      Pax.promises["pax_compiler/test/topics/001. Sorts modules and respects asynchronicity/mod2.js"],
      Pax.promises["pax_compiler/test/topics/001. Sorts modules and respects asynchronicity/mod3.js"],
      Pax.promises["pax_compiler/test/utils/assertion.js"],
    ]);
    const mod1 = Pax.async("pax_compiler/test/topics/001. Sorts modules and respects asynchronicity/mod1.js");
    const mod2 = Pax.async("pax_compiler/test/topics/001. Sorts modules and respects asynchronicity/mod2.js");
    const mod3 = Pax.async("pax_compiler/test/topics/001. Sorts modules and respects asynchronicity/mod3.js");
    
    const assertion = Pax.sync("pax_compiler/test/utils/assertion.js");
    
    assertion(mod3 === 200, "Here mod3 should be 200");
    assertion(mod2.one === 801, "Here mod2.one should be 801");
    assertion(mod2.two === 402, "Here mod2.two should be 402");
    assertion(mod1.one === 800, "Here mod1.one should be 800");
    assertion(mod1.two === 600, "Here mod1.two should be 600");
  } finally {
    return Pax.modules[module.id] = module.exports;
  }
})({ exports: undefined, id: "pax_compiler/test/topics/001. Sorts modules and respects asynchronicity/test.js" });
// ┌───────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────┐
// │ @module[11]: (async) Pax.modules["pax_compiler/test/topics/001. Sorts modules and respects asynchronicity/mod2/async-mod-2.2.js"] │
// └───────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────┘
Pax.promises["pax_compiler/test/topics/001. Sorts modules and respects asynchronicity/mod2/async-mod-2.2.js"] = Pax.modules["pax_compiler/test/topics/001. Sorts modules and respects asynchronicity/mod2/async-mod-2.2.js"] = (async function(module) {
  try {
    await Promise.all([
      Pax.promises["pax_compiler/test/topics/001. Sorts modules and respects asynchronicity/mod2/async-mod-2.2.1.js"],
    ]);
    module.exports = Pax.async("pax_compiler/test/topics/001. Sorts modules and respects asynchronicity/mod2/async-mod-2.2.1.js");
  } finally {
    return Pax.modules[module.id] = module.exports;
  }
})({ exports: undefined, id: "pax_compiler/test/topics/001. Sorts modules and respects asynchronicity/mod2/async-mod-2.2.js" });
// ┌─────────────────────────────────────────────────────────────────────────────────────────────────────────────────────┐
// │ @module[12]: (async) Pax.modules["pax_compiler/test/topics/001. Sorts modules and respects asynchronicity/mod2.js"] │
// └─────────────────────────────────────────────────────────────────────────────────────────────────────────────────────┘
Pax.promises["pax_compiler/test/topics/001. Sorts modules and respects asynchronicity/mod2.js"] = Pax.modules["pax_compiler/test/topics/001. Sorts modules and respects asynchronicity/mod2.js"] = (async function(module) {
  try {
    await Promise.all([
      Pax.promises["pax_compiler/test/topics/001. Sorts modules and respects asynchronicity/mod2/sync-mod-2.1.js"],
      Pax.promises["pax_compiler/test/topics/001. Sorts modules and respects asynchronicity/mod2/async-mod-2.2.js"],
    ]);
    module.exports = {
      one: Pax.sync("pax_compiler/test/topics/001. Sorts modules and respects asynchronicity/mod2/sync-mod-2.1.js"),
      two: Pax.sync("pax_compiler/test/topics/001. Sorts modules and respects asynchronicity/mod2/async-mod-2.2.js"),
    };
  } finally {
    return Pax.modules[module.id] = module.exports;
  }
})({ exports: undefined, id: "pax_compiler/test/topics/001. Sorts modules and respects asynchronicity/mod2.js" });
// ┌───────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────┐
// │ @module[13]: (async) Pax.modules["pax_compiler/test/topics/001. Sorts modules and respects asynchronicity/mod3/async-mod-3.1.js"] │
// └───────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────┘
Pax.promises["pax_compiler/test/topics/001. Sorts modules and respects asynchronicity/mod3/async-mod-3.1.js"] = Pax.modules["pax_compiler/test/topics/001. Sorts modules and respects asynchronicity/mod3/async-mod-3.1.js"] = (async function(module) {
  try {
    await Promise.all([
      Pax.promises["null"],
    ]);
    // Pax.async("null")
    
    module.exports = new Promise(ok => {
      setTimeout(() => ok(900), 10);
    });
  } finally {
    return Pax.modules[module.id] = module.exports;
  }
})({ exports: undefined, id: "pax_compiler/test/topics/001. Sorts modules and respects asynchronicity/mod3/async-mod-3.1.js" });
// ┌─────────────────────────────────────────────────────────────────────────────────────────────────────────────────────┐
// │ @module[14]: (async) Pax.modules["pax_compiler/test/topics/001. Sorts modules and respects asynchronicity/mod3.js"] │
// └─────────────────────────────────────────────────────────────────────────────────────────────────────────────────────┘
Pax.promises["pax_compiler/test/topics/001. Sorts modules and respects asynchronicity/mod3.js"] = Pax.modules["pax_compiler/test/topics/001. Sorts modules and respects asynchronicity/mod3.js"] = (async function(module) {
  try {
    await Promise.all([
      Pax.promises["pax_compiler/test/topics/001. Sorts modules and respects asynchronicity/mod3/async-mod-3.1.js"],
    ]);
    Pax.async("pax_compiler/test/topics/001. Sorts modules and respects asynchronicity/mod3/async-mod-3.1.js");
    
    module.exports = 200;
  } finally {
    return Pax.modules[module.id] = module.exports;
  }
})({ exports: undefined, id: "pax_compiler/test/topics/001. Sorts modules and respects asynchronicity/mod3.js" });
// ┌─────────────────────────────────────────────────────────────────────┐
// │ @module[15]: (async) Pax.modules["pax_compiler/test/entry.made.js"] │
// └─────────────────────────────────────────────────────────────────────┘
Pax.promises["pax_compiler/test/entry.made.js"] = Pax.modules["pax_compiler/test/entry.made.js"] = (async function(module) {
  try {
    await Promise.all([
      Pax.promises["pax_compiler/test/topics/001. Sorts modules and respects asynchronicity/test.js"],
      Pax.promises["pax_compiler/test/topics/001. Sorts modules and respects asynchronicity/mod2/async-mod-2.2.js"],
      Pax.promises["pax_compiler/test/topics/001. Sorts modules and respects asynchronicity/mod2.js"],
      Pax.promises["pax_compiler/test/topics/001. Sorts modules and respects asynchronicity/mod3/async-mod-3.1.js"],
      Pax.promises["pax_compiler/test/topics/001. Sorts modules and respects asynchronicity/mod3.js"],
    ]);
    Pax.async("pax_compiler/test/topics/001. Sorts modules and respects asynchronicity/test.js");
    Pax.async("pax_compiler/test/topics/002. Can use drivers from modules/test.js");
    
    // Left in blank in purpose.
    // Pero puedes hacer tests con todos los módulos anteriores ya cargados en asíncrono
    console.log(`✅ Loaded ${Object.keys(Pax.modules).length} modules + Tests passing.`);
  } finally {
    return Pax.modules[module.id] = module.exports;
  }
})({ exports: undefined, id: "pax_compiler/test/entry.made.js" });
// ┌─────────────────┐
// │ Pax Minimal API │
// └─────────────────┘
})(typeof Pax !== "undefined" ? Pax : {
  modules: {},
  promises: {},
  settings: {"drivers":{"{@}":"pax_modules"}},
  resolveDriver: function(text) {
    let output = text;
    const drivers = this.settings?.drivers || {};
    for(const key in drivers) {
      const value = drivers[key];
      output = text.replace(key, value);
    }
    return output;
  },
  find: function(id) {
    const normalizedId = this.resolveDriver(id);
    if(!(normalizedId in this.modules)) {
      throw new Error(`Module not found by Pax: «${normalizedId}»`);
    }
    return this.modules[normalizedId];
  },
  sync: function(id) {
    return this.find(id);
  },
  async: function(id) {
    return this.find(id);
  },
});