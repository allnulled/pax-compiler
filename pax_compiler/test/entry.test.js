module.exports = function(compilation) {
  PaxCompiler.assert(typeof compilation === "object", { assertion: 1, message: "compilation should be object" });
  // PaxCompiler.assert(compilation.jsModulesNames.length === 7, { message: "compilation.jsModulesNames length should be 7" });
  console.log("comps:", compilation.output);
  // PaxCompiler.assert(compilation.output.js.length, { message: "compilation.output.js.length should not be 0" });
  const output = __dirname + "/entry.dist.js";
  require("fs").writeFileSync(output, compilation.output.js, "utf8");
  require(output);
}