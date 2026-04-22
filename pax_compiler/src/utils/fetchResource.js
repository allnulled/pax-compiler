module.exports = function(file) {
  trace("PaxCompiler.utils.fetchResource", arguments, false);
  return require("fs").promises.readFile(file, "utf8").catch(error => {
    console.error("Failed to fetch resource: " + file);
    throw error;
  });
}