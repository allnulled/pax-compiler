const mod1 = Pax.async("pax_compiler/test/topics/001. Sorts modules and respects asynchronicity/mod1.js");
const mod2 = Pax.async("pax_compiler/test/topics/001. Sorts modules and respects asynchronicity/mod2.js");
const mod3 = Pax.async("pax_compiler/test/topics/001. Sorts modules and respects asynchronicity/mod3.js");

const assertion = Pax.sync("pax_compiler/test/utils/assertion.js");

assertion(mod3 === 200, "Here mod3 should be 200");
assertion(mod2.one === 801, "Here mod2.one should be 801");
assertion(mod2.two === 402, "Here mod2.two should be 402");
assertion(mod1.one === 800, "Here mod1.one should be 800");
assertion(mod1.two === 600, "Here mod1.two should be 600");