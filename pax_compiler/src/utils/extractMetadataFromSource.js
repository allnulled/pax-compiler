module.exports = function(source, compilation) {
  trace("PaxCompiler.utils.extractMetadataFromSource", arguments, false);
  const regexMatches = source.matchAll(compilation.compiler.constructor.classes.DependencyDescriptor.regex);
  const matches = [];
  let counter = 0;
  Extract_matches:
  for(let it of regexMatches) {
    const [match, ...groups] = it;
    const layer = groups.length >= 2 ? groups[0] : undefined;
    const subtype = groups.length >= 2 ? groups[1] : groups[0];
    const refModule = groups.length >= 2 ? groups[2] : groups[1];
    const item = new compilation.compiler.constructor.classes.DependencyDescriptor({
      type: "Pax/dependency",
      layer: typeof layer !== "string" ? layer : parseInt(layer.substring(7, layer.length-1)),
      subtype,
      id: refModule,
      match,
      count: counter++,
      size: match.length,
      pos: it.index,
    });
    matches.push(item);
  }
  return matches;
};