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
    static isTracing = false;
    static getTraceFunction() {
      return this.trace.bind(this);
    }
    static trace = function() {};
    static debuggify = function() {};
  };
  PaxTracer.isTracing = true;
  PaxTracer.hasTraceFilters = ("compileModule").split("|").filter(it => it !== "");
  PaxTracer.hasTraceDebuggers = ("").split("|").filter(it => it !== "");
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
            htmlModulesData: {},
            htmlModulesNames: [],
            allModulesNames: [],
            asyncModulesData: {},
            asyncModulesNames: [],
            normalModulesData: {},
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
        start = async function() {
          trace("PaxCompiler.classes.Compilation.prototype.start", arguments, false);
          this.started = new Date();
          this.compiler.assert(this.state === "created", {
            message: `Compilation instance cannot call method «start» in «${this.state}» state, only in «created» state`,
            method: "PaxCompler.classes.Compilation.prototype.start",
            on: "this.state"
          });
          this.state = "analyzing modules";
          await this.compiler.constructor.utils.compileModule(this.target, this);
          this.finishedAnalysis = new Date();
          this.analysisDuration = this.finishedAnalysis - this.started;
          this.state = "generating code";
          await this.compiler.constructor.utils.generateSources(this);
          this.state = "completed";
          return this;
        }
      },
      DependencyDescriptor: class {
        static regex = /Pax(\.layer\( *[0-9]+ *\))?\.(module|static)\( *"([^"]+)" *\)/g;
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
              const {
                id,
                subtype
              } = dependencyValue;
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
            Iterating_steps: for (let indexStep = 0; indexStep < allSteps.length; indexStep++) {
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
          let globalPax = function(content) {
            let api = "";
            api += `(function(Pax) {\n`;
            api += `${content}`;
            api += `})(typeof Pax !== "undefined" ? Pax : `;
            api += "{\n";
            api += "  $modules: {},\n";
            api += "  settings: {},\n";
            api += "  module: function(id) {\n";
            api += "    return this.$modules[id];\n";
            api += "  },\n";
            api += "  static: function(id) {\n";
            api += "    return this.$modules[id];\n";
            api += "  },\n";
            api += "}";
            api += `);`;
            return api;
          }
          let js = '';
          Js_content: {
            const allSteps = this.output.steps;
            let counter = 1;
            for (let indexStep = 0; indexStep < allSteps.length; indexStep++) {
              const step = allSteps[indexStep];
              const sourcify = step === 2 ? this.sourcifySyncModule.bind(this) : this.sourcifySyncModule.bind(this);
              for (let indexModule = 0; indexModule < step.length; indexModule++) {
                const moduleId = step[indexModule];
                js += sourcify(moduleId, counter++);
              }
            }
          }
          this.output.js += header;
          this.output.js += globalPax(js);
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
        trace("PaxCompiler.utils.compileModule", arguments, true);
        const target = compilation.compiler.resolveRelative(input);
        const source = await this.fetchResource(target);
        if (target.endsWith(".js")) await this.compileJsModule(target, source, compilation);
        else if (target.endsWith(".css")) await this.compileCssModule(target, source, compilation);
        else if (target.endsWith(".html")) await this.compileHtmlModule(target, source, compilation);
        else await this.compileNormalModule(target, source, compilation);
      },
      compileJsModule: async function(target, source, compilation) {
        trace("PaxCompiler.utils.compileJsModule", arguments, false);
        // 1. Caché para no redundar módulos:
        if (target in compilation.jsModulesData) return compilation.jsModulesData[target];
        // 2. Contruir y procesar el descriptor de módulo:
        const moduleDescriptor = new PaxCompiler.classes.ModuleDescriptor({
          extension: "js",
          target,
          source,
          compilation
        });
        // 3. Existe antes que sus dependencias para evitar recursividad:
        await this.registerModule(moduleDescriptor, compilation);
        // 4. Procesa enteramente (hasta persistencia) sus dependencias:
        await this.compileDependencies(moduleDescriptor, compilation);
        // 5. Se construye su propio código:
        await this.makeJsModuleSource(moduleDescriptor, compilation);
        // 6. Se marca como resuelto en la compilación:
        await this.persistModule(moduleDescriptor, compilation);
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
            const layer = groups.length >= 2 ? groups[0] : undefined;
            const subtype = groups.length >= 2 ? groups[1] : groups[0];
            const refModule = groups.length >= 2 ? groups[2] : groups[1];
            const item = new compilation.compiler.constructor.classes.DependencyDescriptor({
              type: "Pax/dependency",
              layer: typeof layer !== "string" ? layer : parseInt(layer.substring(7, layer.length - 1)),
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
      makeJsModuleSource: function(moduleDescriptor, compilation) {
        trace("PaxCompiler.utils.makeModuleSource", arguments, false);
        const targetStringified = JSON.stringify(moduleDescriptor.target);
        let js = "";
        js += `(function(module) {\n`;
        js += `  try {\n`;
        js += `    ${moduleDescriptor.source.split("\n").join("\n    ")}\n`;
        js += `  } finally {\n`;
        js += `    Pax.$modules[${targetStringified}] = module.exports;\n`;
        js += `  }\n`;
        js += `})({ exports: undefined });`;
        moduleDescriptor.jsSource = js;
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
      return this.resolveDriver(require("path").resolve(this.basedir, file));
    };
    resolveRelative = function(file) {
      trace("PaxCompiler.prototype.resolveRelative", arguments, false);
      return this.resolve(file).replace(this.basedir + "/", "");
    };
    loadSettings = async function() {
      trace("PaxCompiler.prototype.loadSettings", arguments, false);
      if (this.settings) {
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