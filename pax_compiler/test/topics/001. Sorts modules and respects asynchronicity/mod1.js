const one = Pax.sync("pax_compiler/test/topics/001. Sorts modules and respects asynchronicity/mod1/sync-mod-1.1.js");
const two = Pax.sync("pax_compiler/test/topics/001. Sorts modules and respects asynchronicity/mod1/sync-mod-1.2.js");

module.exports = { one, two };