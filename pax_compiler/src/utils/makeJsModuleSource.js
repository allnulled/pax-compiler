module.exports = function(moduleDescriptor, compilation) {
  trace("PaxCompiler.utils.makeModuleSource", arguments, false);
  const targetStringified = JSON.stringify(moduleDescriptor.target);
  die(moduleDescriptor);
  let js = "";
  js += `(function(module) {\n`;
  js += `  try {\n`;
  js += `    ${moduleDescriptor.source.split("\n").join("\n    ")}\n`;
  js += `  } finally {\n`;
  js += `    Pax.modules[${targetStringified}] = module.exports;\n`;
  js += `  }\n`;
  js += `})({ exports: undefined });`;
  moduleDescriptor.jsSource = js;
};