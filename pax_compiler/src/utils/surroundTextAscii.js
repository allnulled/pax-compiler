module.exports = function(text, linePrepend = "// ", lineOffset = 0) {
  let max = 0;
  const lines = text.split("\n");
  lines.forEach(line => {
    if(line.length > max) max = line.length;
  });
  let out = "";
  out += linePrepend + "┌" + "─".repeat(max + 2) + "┐\n";
  out += lines.map(line => {
    if(line === "----") {
      return `${linePrepend}├─${"─".repeat(max + lineOffset)}─┤`;
    }
    return `${linePrepend}│ ${line.padEnd(max + lineOffset, " ")} │`;
  }).join("\n") + "\n";
  out += linePrepend + "└" + "─".repeat(max + 2) + "┘\n";
  return out;
};