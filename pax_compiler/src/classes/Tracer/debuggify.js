module.exports = function (data) {
  if (data === null) return "null";
  if (typeof data === "object") {
    try {
      return JSON.stringify(data);
    } catch (error) {
      return "*" + Object.keys(data).length + " props";
    }
  }
  if (typeof data === "function") {
    return "*" + data.toString().length + " chars";
  }
  if (typeof data === "string") {
    return JSON.stringify(data.substr(0, 30) + (data.length <= 30 ? "" : "..."));
  }
  return data;
};