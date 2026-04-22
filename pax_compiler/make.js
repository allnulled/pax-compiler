const fs = require("fs");
const path = require("path");
const ejs = require("ejs");
const { js } = require("js-beautify");

const PaxCompilerBuilder = require(__dirname + "/PaxCompilerBuilder.js");
const source = PaxCompilerBuilder.renderFile("pax_compiler/PaxCompiler.js", { fs, path, require, process, PaxCompilerBuilder, });
fs.writeFileSync(PaxCompilerBuilder.resolve("pax-compiler.dist.js"), js(source, {indent_size: 2}), "utf8");