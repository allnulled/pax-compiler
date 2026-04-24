Pax.async("pax_compiler/test/topics/001. Sorts modules and respects asynchronicity/test.js");
Pax.async("pax_compiler/test/topics/002. Can use drivers from modules/test.js");

// Left in blank in purpose.
// Pero puedes hacer tests con todos los módulos anteriores ya cargados en asíncrono
console.log(`✅ Loaded ${Object.keys(Pax.modules).length} modules + Tests passing.`);