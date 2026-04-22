module.exports = class extends Error {
  constructor(data) {
    super(typeof data === "string" ? data : JSON.stringify(data));
    trace("PaxCompiler.classes.ErrorData.constructor", arguments, false);
    this.data = typeof data !== "object" ? { value: data } : data;
    this.name = "ErrorData";
  }
}