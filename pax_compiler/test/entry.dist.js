// ┌──────────────────────────────────────────────────────────────────────────────────────────────────────────┐
// │ ! Pax bundle from: free(7) + sync(1) + async(5) + entry(1) = 14 modules                                  │
// ├──────────────────────────────────────────────────────────────────────────────────────────────────────────┤
// │ Started at:   2026/04/24 12:28:06.783                                                                    │
// │ Finished at:  2026/04/24 12:28:06.789                                                                    │
// │ Took:         6 milliseconds                                                                             │
// ├──────────────────────────────────────────────────────────────────────────────────────────────────────────┤
// │ Wave 1/4: 7 modules                                                                                      │
// ├──────────────────────────────────────────────────────────────────────────────────────────────────────────┤
// │   · [01] pax_compiler/test/topics/001. Sorts modules and respects asynchronicity/mod1/sync-mod-1.1.js    │
// │   · [02] pax_compiler/test/topics/001. Sorts modules and respects asynchronicity/mod1/sync-mod-1.2.js    │
// │   · [03] pax_compiler/test/topics/001. Sorts modules and respects asynchronicity/mod2/sync-mod-2.1.js    │
// │   · [04] pax_compiler/test/topics/001. Sorts modules and respects asynchronicity/mod2/async-mod-2.2.1.js │
// │   · [05] null                                                                                            │
// │   · [06] pax_compiler/test/utils/assertion.js                                                            │
// │   · [07] pax_compiler/test/topics/002. Sync and async work properly/test.js                              │
// ├──────────────────────────────────────────────────────────────────────────────────────────────────────────┤
// │ Wave 2/4: 1 modules                                                                                      │
// ├──────────────────────────────────────────────────────────────────────────────────────────────────────────┤
// │   · [08] pax_compiler/test/topics/001. Sorts modules and respects asynchronicity/mod1.js                 │
// ├──────────────────────────────────────────────────────────────────────────────────────────────────────────┤
// │ Wave 3/4: 5 modules                                                                                      │
// ├──────────────────────────────────────────────────────────────────────────────────────────────────────────┤
// │   · [09] pax_compiler/test/topics/001. Sorts modules and respects asynchronicity/test.js                 │
// │   · [10] pax_compiler/test/topics/001. Sorts modules and respects asynchronicity/mod2/async-mod-2.2.js   │
// │   · [11] pax_compiler/test/topics/001. Sorts modules and respects asynchronicity/mod2.js                 │
// │   · [12] pax_compiler/test/topics/001. Sorts modules and respects asynchronicity/mod3/async-mod-3.1.js   │
// │   · [13] pax_compiler/test/topics/001. Sorts modules and respects asynchronicity/mod3.js                 │
// ├──────────────────────────────────────────────────────────────────────────────────────────────────────────┤
// │ Wave 4/4: 1 modules                                                                                      │
// ├──────────────────────────────────────────────────────────────────────────────────────────────────────────┤
// │   · [14] pax_compiler/test/entry.made.js                                                                 │
// └──────────────────────────────────────────────────────────────────────────────────────────────────────────┘
(function(Pax) {
// ┌─────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────┐
// │ @module[1]: Pax.modules["pax_compiler/test/topics/001. Sorts modules and respects asynchronicity/mod1/sync-mod-1.1.js"] │
// └─────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────┘
  (function(module) {
    try {
      module.exports = 800;
    } finally {
      Pax.modules[module.id] = module.exports;
    }

})({ exports: undefined, id: "pax_compiler/test/topics/001. Sorts modules and respects asynchronicity/mod1/sync-mod-1.1.js" });
// ┌─────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────┐
// │ @module[2]: Pax.modules["pax_compiler/test/topics/001. Sorts modules and respects asynchronicity/mod1/sync-mod-1.2.js"] │
// └─────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────┘
  (function(module) {
    try {
      module.exports = 600;
    } finally {
      Pax.modules[module.id] = module.exports;
    }

})({ exports: undefined, id: "pax_compiler/test/topics/001. Sorts modules and respects asynchronicity/mod1/sync-mod-1.2.js" });
// ┌─────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────┐
// │ @module[3]: Pax.modules["pax_compiler/test/topics/001. Sorts modules and respects asynchronicity/mod2/sync-mod-2.1.js"] │
// └─────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────┘
  (function(module) {
    try {
      module.exports = 801;
    } finally {
      Pax.modules[module.id] = module.exports;
    }

})({ exports: undefined, id: "pax_compiler/test/topics/001. Sorts modules and respects asynchronicity/mod2/sync-mod-2.1.js" });
// ┌────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────┐
// │ @module[4]: Pax.modules["pax_compiler/test/topics/001. Sorts modules and respects asynchronicity/mod2/async-mod-2.2.1.js"] │
// └────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────┘
  (function(module) {
    try {
      module.exports = 402;
    } finally {
      Pax.modules[module.id] = module.exports;
    }

})({ exports: undefined, id: "pax_compiler/test/topics/001. Sorts modules and respects asynchronicity/mod2/async-mod-2.2.1.js" });
// ┌─────────────────────────────────┐
// │ @module[5]: Pax.modules["null"] │
// └─────────────────────────────────┘
  (function(module) {
    try {
      module.exports = null;
    } finally {
      Pax.modules[module.id] = module.exports;
    }

})({ exports: undefined, id: "null" });
// ┌─────────────────────────────────────────────────────────────────┐
// │ @module[6]: Pax.modules["pax_compiler/test/utils/assertion.js"] │
// └─────────────────────────────────────────────────────────────────┘
  (function(module) {
    try {
      module.exports = function(condition, message) {
        if(!condition) throw new Error(message);
      }
    } finally {
      Pax.modules[module.id] = module.exports;
    }

})({ exports: undefined, id: "pax_compiler/test/utils/assertion.js" });
// ┌───────────────────────────────────────────────────────────────────────────────────────────────┐
// │ @module[7]: Pax.modules["pax_compiler/test/topics/002. Sync and async work properly/test.js"] │
// └───────────────────────────────────────────────────────────────────────────────────────────────┘
  (function(module) {
    try {
      
    } finally {
      Pax.modules[module.id] = module.exports;
    }

})({ exports: undefined, id: "pax_compiler/test/topics/002. Sync and async work properly/test.js" });
// ┌────────────────────────────────────────────────────────────────────────────────────────────────────────────┐
// │ @module[8]: Pax.modules["pax_compiler/test/topics/001. Sorts modules and respects asynchronicity/mod1.js"] │
// └────────────────────────────────────────────────────────────────────────────────────────────────────────────┘
  (function(module) {
    try {
      const one = Pax.sync("pax_compiler/test/topics/001. Sorts modules and respects asynchronicity/mod1/sync-mod-1.1.js");
      const two = Pax.sync("pax_compiler/test/topics/001. Sorts modules and respects asynchronicity/mod1/sync-mod-1.2.js");
      
      module.exports = { one, two };
    } finally {
      Pax.modules[module.id] = module.exports;
    }

})({ exports: undefined, id: "pax_compiler/test/topics/001. Sorts modules and respects asynchronicity/mod1.js" });
// ┌────────────────────────────────────────────────────────────────────────────────────────────────────────────────────┐
// │ @module[9]: (async) Pax.modules["pax_compiler/test/topics/001. Sorts modules and respects asynchronicity/test.js"] │
// └────────────────────────────────────────────────────────────────────────────────────────────────────────────────────┘
Pax.promises["pax_compiler/test/topics/001. Sorts modules and respects asynchronicity/test.js"] = Pax.modules["pax_compiler/test/topics/001. Sorts modules and respects asynchronicity/test.js"] = (async function(module) {
  try {
    await Promise.all([
      Pax.promises["pax_compiler/test/topics/001. Sorts modules and respects asynchronicity/mod1.js"],
      Pax.promises["pax_compiler/test/topics/001. Sorts modules and respects asynchronicity/mod2.js"],
      Pax.promises["pax_compiler/test/topics/001. Sorts modules and respects asynchronicity/mod3.js"],
      Pax.promises["pax_compiler/test/utils/assertion.js"],
    ]);
    const mod1 = Pax.async("pax_compiler/test/topics/001. Sorts modules and respects asynchronicity/mod1.js");
    const mod2 = Pax.async("pax_compiler/test/topics/001. Sorts modules and respects asynchronicity/mod2.js");
    const mod3 = Pax.async("pax_compiler/test/topics/001. Sorts modules and respects asynchronicity/mod3.js");
    
    const assertion = Pax.sync("pax_compiler/test/utils/assertion.js");
    
    assertion(mod3 === 200, "Here mod3 should be 200");
    assertion(mod2.one === 801, "Here mod2.one should be 801");
    assertion(mod2.two === 402, "Here mod2.two should be 402");
    assertion(mod1.one === 800, "Here mod1.one should be 800");
    assertion(mod1.two === 600, "Here mod1.two should be 600");
  } finally {
    return Pax.modules[module.id] = module.exports;
  }
})({ exports: undefined, id: "pax_compiler/test/topics/001. Sorts modules and respects asynchronicity/test.js" });
// ┌───────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────┐
// │ @module[10]: (async) Pax.modules["pax_compiler/test/topics/001. Sorts modules and respects asynchronicity/mod2/async-mod-2.2.js"] │
// └───────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────┘
Pax.promises["pax_compiler/test/topics/001. Sorts modules and respects asynchronicity/mod2/async-mod-2.2.js"] = Pax.modules["pax_compiler/test/topics/001. Sorts modules and respects asynchronicity/mod2/async-mod-2.2.js"] = (async function(module) {
  try {
    await Promise.all([
      Pax.promises["pax_compiler/test/topics/001. Sorts modules and respects asynchronicity/mod2/async-mod-2.2.1.js"],
    ]);
    module.exports = Pax.async("pax_compiler/test/topics/001. Sorts modules and respects asynchronicity/mod2/async-mod-2.2.1.js");
  } finally {
    return Pax.modules[module.id] = module.exports;
  }
})({ exports: undefined, id: "pax_compiler/test/topics/001. Sorts modules and respects asynchronicity/mod2/async-mod-2.2.js" });
// ┌─────────────────────────────────────────────────────────────────────────────────────────────────────────────────────┐
// │ @module[11]: (async) Pax.modules["pax_compiler/test/topics/001. Sorts modules and respects asynchronicity/mod2.js"] │
// └─────────────────────────────────────────────────────────────────────────────────────────────────────────────────────┘
Pax.promises["pax_compiler/test/topics/001. Sorts modules and respects asynchronicity/mod2.js"] = Pax.modules["pax_compiler/test/topics/001. Sorts modules and respects asynchronicity/mod2.js"] = (async function(module) {
  try {
    await Promise.all([
      Pax.promises["pax_compiler/test/topics/001. Sorts modules and respects asynchronicity/mod2/sync-mod-2.1.js"],
      Pax.promises["pax_compiler/test/topics/001. Sorts modules and respects asynchronicity/mod2/async-mod-2.2.js"],
    ]);
    module.exports = {
      one: Pax.sync("pax_compiler/test/topics/001. Sorts modules and respects asynchronicity/mod2/sync-mod-2.1.js"),
      two: Pax.sync("pax_compiler/test/topics/001. Sorts modules and respects asynchronicity/mod2/async-mod-2.2.js"),
    };
  } finally {
    return Pax.modules[module.id] = module.exports;
  }
})({ exports: undefined, id: "pax_compiler/test/topics/001. Sorts modules and respects asynchronicity/mod2.js" });
// ┌───────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────┐
// │ @module[12]: (async) Pax.modules["pax_compiler/test/topics/001. Sorts modules and respects asynchronicity/mod3/async-mod-3.1.js"] │
// └───────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────┘
Pax.promises["pax_compiler/test/topics/001. Sorts modules and respects asynchronicity/mod3/async-mod-3.1.js"] = Pax.modules["pax_compiler/test/topics/001. Sorts modules and respects asynchronicity/mod3/async-mod-3.1.js"] = (async function(module) {
  try {
    await Promise.all([
      Pax.promises["null"],
    ]);
    // Pax.async("null")
    
    module.exports = new Promise(ok => {
      setTimeout(() => ok(900), 10);
    });
  } finally {
    return Pax.modules[module.id] = module.exports;
  }
})({ exports: undefined, id: "pax_compiler/test/topics/001. Sorts modules and respects asynchronicity/mod3/async-mod-3.1.js" });
// ┌─────────────────────────────────────────────────────────────────────────────────────────────────────────────────────┐
// │ @module[13]: (async) Pax.modules["pax_compiler/test/topics/001. Sorts modules and respects asynchronicity/mod3.js"] │
// └─────────────────────────────────────────────────────────────────────────────────────────────────────────────────────┘
Pax.promises["pax_compiler/test/topics/001. Sorts modules and respects asynchronicity/mod3.js"] = Pax.modules["pax_compiler/test/topics/001. Sorts modules and respects asynchronicity/mod3.js"] = (async function(module) {
  try {
    await Promise.all([
      Pax.promises["pax_compiler/test/topics/001. Sorts modules and respects asynchronicity/mod3/async-mod-3.1.js"],
    ]);
    Pax.async("pax_compiler/test/topics/001. Sorts modules and respects asynchronicity/mod3/async-mod-3.1.js");
    
    module.exports = 200;
  } finally {
    return Pax.modules[module.id] = module.exports;
  }
})({ exports: undefined, id: "pax_compiler/test/topics/001. Sorts modules and respects asynchronicity/mod3.js" });
// ┌─────────────────────────────────────────────────────────────────────┐
// │ @module[14]: (async) Pax.modules["pax_compiler/test/entry.made.js"] │
// └─────────────────────────────────────────────────────────────────────┘
Pax.promises["pax_compiler/test/entry.made.js"] = Pax.modules["pax_compiler/test/entry.made.js"] = (async function(module) {
  try {
    await Promise.all([
      Pax.promises["pax_compiler/test/topics/001. Sorts modules and respects asynchronicity/test.js"],
      Pax.promises["pax_compiler/test/topics/001. Sorts modules and respects asynchronicity/mod2/async-mod-2.2.js"],
      Pax.promises["pax_compiler/test/topics/001. Sorts modules and respects asynchronicity/mod2.js"],
      Pax.promises["pax_compiler/test/topics/001. Sorts modules and respects asynchronicity/mod3/async-mod-3.1.js"],
      Pax.promises["pax_compiler/test/topics/001. Sorts modules and respects asynchronicity/mod3.js"],
    ]);
    Pax.async("pax_compiler/test/topics/001. Sorts modules and respects asynchronicity/test.js");
    Pax.async("pax_compiler/test/topics/002. Sync and async work properly/test.js");
    
    // Left in blank in purpose.
    // Pero puedes hacer tests con todos los módulos anteriores ya cargados en asíncrono
    console.log(`✅ Loaded ${Object.keys(Pax.modules).length} modules + Tests passing.`);
  } finally {
    return Pax.modules[module.id] = module.exports;
  }
})({ exports: undefined, id: "pax_compiler/test/entry.made.js" });
// ┌─────────────────┐
// │ Pax Minimal API │
// └─────────────────┘
})(typeof Pax !== "undefined" ? Pax : {
  modules: {},
  promises: {},
  settings: {"drivers":{"{@}":"pax_modules"}},
  sync: function(id) {
    return this.modules[id];
  },
  async: function(id) {
    return this.modules[id];
  },
});