const fs = require("fs");
const path = require("path");
const ejs = require("ejs");

module.exports = {
  resolve: function (...subpaths) {
    return path.resolve(__dirname, "..", ...subpaths);
  },
  renderCache: {},
  renderFile: function (file, parameters = {}, options = {}) {
    const fullpath = this.resolve(file);
    const template = this.renderCache[fullpath] = this.renderCache[fullpath] || fs.readFileSync(fullpath).toString();
    return ejs.render(template, { fs, path, require, process, __dirname: this.resolve(""), PaxBuilder: this, ...parameters }, options);
  },
  wrapModule: function (source) {
    return `(function(module) {
    try {
      ${source}
    } finally {
      return module.exports;
    }
  })({ exports: undefined })`;
  },
  extractModuleExportsBodyFromSource: function(source) {
    return source.replace(/^module\.exports *= *|;[\t\r\n ]*$/g, "");
  },
  includeModule: function (file, parameters = {}, options = {}) {
    const fullpath = this.resolve(file);
    const template = this.renderCache[fullpath] = this.renderCache[fullpath] || fs.readFileSync(fullpath).toString();
    return this.wrapModule(ejs.render(template, { fs, path, require, process, __dirname: this.resolve(""), PaxBuilder: this, ...parameters }, options));
  },
  includeModuleExportsBody: function(...args) {
    const source = this.renderFile(...args);
    return this.extractModuleExportsBodyFromSource(source);
  },
  prettyLines: function(texto, joiner = "\n + ") {
    const allLines = texto.split("\n");
    const lastLine = allLines.length - 1;
    return allLines.map((line,i) => JSON.stringify(line + (i !== lastLine ? "\n" : ""))).join(joiner);
  }
};