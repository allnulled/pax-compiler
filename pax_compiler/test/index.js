require(__dirname + "/../../pax-compiler.dist.js");

const main = async function() {
  // Si quieres tener drivers tienes que hacer esto antes de usar compile:
  await PaxCompiler.global.loadSettings();
  const compilation = await PaxCompiler.global.compile("pax_compiler/test/entry.js");
  await require(__dirname + "/entry.test.js")(compilation);
};

main();
