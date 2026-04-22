module.exports = function(compilation) {
  trace("PaxCompiler.utils.generateSources", arguments, false);
  let js = "";
  let css = "";
  let counter = 1;
  const sortedModules = {
    syncModules: [],
    asyncModules: [],
    staticModules: [],
  };
  let size = 0;
  const allModules = compilation.jsModulesData;
  Sort_modules: 
  for(let moduleId in allModules) {
    size++;
    const moduleData = allModules[moduleId];
    // console.log("moduleData:", moduleData);
  }
  for(const moduleId in allModules) {
    const moduleData = allModules[moduleId];
    const { extension, source, jsSource } = moduleData;
    if(extension === "js") {
      const currentIndex = ("" + (counter++)) + "/" + size;
      let moduleHeader = "";
      moduleHeader += `🟢 ${currentIndex}: Pax.$modules["${moduleId}"] 🟢`;
      moduleHeader = this.surroundTextAscii(moduleHeader, "// ", 0);
      js += moduleHeader;
      js += jsSource;
      js += "\n";
    } else if(extension === "css") {
      css += source;
    }
  }
  let code = ``;
  counter = 1;
  let maxLength = 0;
  for(const moduleId in allModules) {
    const line = `\n🔹 nº${counter++}: Pax.$modules["${moduleId}"]`;
    code += line;
    if(maxLength < line.length) {
      maxLength = line.length;
    }
  }
  maxLength = maxLength < 4 ? maxLength : maxLength - 4;
  let header = "";
  header += `🔷 Pax package starts here 🔷\n`;
  header += `----`;
  header += code;
  header = this.surroundTextAscii(header);
  header += `(function() {\n`;
  header += `  ${this.indentText(2, js).trimRight()}`;
  header += `\n})()`;
  js = header;
  let footer = "🔶 Pax package ends here 🔶";
  footer += `\n----`;
  footer += `\n🔸 analysis duration:  │ ${compilation.analysisDuration} milliseconds`;
  footer += `\n🔸 modules of js:      │ ${compilation.jsModulesNames.length} modules`;
  footer += `\n🔸 modules of css:     │ ${compilation.cssModulesNames.length} modules`;
  footer += `\n🔸 modules of html:    │ ${compilation.htmlModulesNames.length} modules`;
  js += "\n" + this.surroundTextAscii(footer);
  let paxImport = '';
  paxImport += require("fs").readFileSync(compilation.compiler.resolve("pax_compiler/Pax.js")).toString();
  js = paxImport + "\n" + js;
  compilation.jsSource = js;
  compilation.cssSource = css;
};