module.exports = function(source, compilation) {
  trace("PaxCompiler.utils.extractMetadataFromSource", arguments, false);
  const regexMatches = source.matchAll(compilation.compiler.constructor.classes.DependencyDescriptor.regex);
  const matches = [];
  let counter = 0;
  Extract_matches:
  for(let it of regexMatches) {
    const [match, ...groups] = it;
    const refModule = groups[1];
    const subtype = groups[0];
    const item = new compilation.compiler.constructor.classes.DependencyDescriptor({
      type: "Pax/dependency",
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