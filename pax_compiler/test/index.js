const fs = require("fs");
const path = require("path");

require(__dirname + "/../../pax-compiler.dist.js");


const main = async function () {
  // Si quieres tener drivers tienes que hacer esto antes de usar compile:
  await PaxCompiler.global.loadSettings();

  const testEntry = "pax_compiler/test/entry.made.js";
  const testOutput = __dirname + "/entry.dist.js";
  const topicsDir = __dirname + "/topics";
  const dirs = fs.readdirSync(topicsDir);
  let js = "";
  for (let index = 0; index < dirs.length; index++) {
    const dir = dirs[index];
    const testFile = path.resolve(topicsDir, dir, "test.js").replace(PaxCompiler.global.basedir + "/", "");
    js += `Pax.async(${JSON.stringify(testFile)});\n`;
  }
  const testPayload = fs.readFileSync(__dirname + "/entry.payload.js").toString();
  js += "\n" + testPayload;
  fs.writeFileSync(testEntry, js, "utf8");
  const compilation = await PaxCompiler.global.compile(testEntry);
  require("fs").writeFileSync(testOutput, compilation.output.js, "utf8");
  require(testOutput);
};

main();
