module.exports = async function() {
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