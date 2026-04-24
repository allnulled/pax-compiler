module.exports = async function() {
  trace("PaxCompiler.classes.Compilation.prototype.start", arguments, false);
  // 1. Create
  const date1 = new Date();
  this.started = this.formatDate(date1);
  this.startedAnalysis = this.started;
  this.compiler.assert(this.state === "created", {
    message: `Compilation instance cannot call method «start» in «${this.state}» state, only in «created» state`,
    method: "PaxCompler.classes.Compilation.prototype.start",
    on: "this.state"
  });
  // 2. Analyze
  this.state = "analyzing modules";
  await this.compiler.constructor.utils.compileModule(this.target, this);
  const date2 = new Date();
  this.finishedAnalysis = this.formatDate(date2);
  this.analysisDuration = date2 - date1;
  // 3. Generate
  this.state = "generating code";
  await this.compiler.constructor.utils.generateSources(this);
  const date3 = new Date();
  this.finishedGeneration = this.formatDate(date3);
  this.finished = this.finishedGeneration;
  this.analysisDuration = date3 - date2;
  this.milliseconds = this.started - this.finished;
  // 4. Return
  this.state = "completed";
  return this;
}