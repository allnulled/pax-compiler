const assertion = Pax.sync("pax_compiler/test/utils/assertion.js");
const PaxCompiler = Pax.sync("{@}/pax/pax-compiler.dist.js");

assertion(typeof PaxCompiler === "function", "PaxCompiler reached through driver shortcut {@} should return PaxCompiler global class");