module.exports = class {
  static isTracing = false;
  static getTraceFunction() {
    return this.trace.bind(this);
  }
  static trace = function() {};
  static debuggify = function() {};
};