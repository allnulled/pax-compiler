module.exports = function (data) {
  if (data === null) return "null";
  if (typeof data === "object") {
    try {
      return this.jsonify(data);
    } catch (error) {
      return "(not stringifiable) *" + Object.keys(data).length + " props";
    }
  }
  if (typeof data === "function") {
    return "*" + data.toString().length + " chars";
  }
  if (typeof data === "string") {
    // @TOREMOVE: Límite de caracteres para no llenar la consola:
    // return JSON.stringify(data.substr(0, 30) + (data.length <= 30 ? "" : "..."));
  }
  return data;
};