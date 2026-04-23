// ┌─────────────────────────────────────────────────────────────────────────────────────────────────────────┐
// │ Pax module                                                                                              │
// ├─────────────────────────────────────────────────────────────────────────────────────────────────────────┤
// │ + Loading wave 1/4:                                                                                     │
// │   · [1] pax_compiler/test/topics/001. Sorts modules and respects asynchronicity/mod1/sync-mod-1.1.js    │
// │   · [2] pax_compiler/test/topics/001. Sorts modules and respects asynchronicity/mod1/sync-mod-1.2.js    │
// │   · [3] pax_compiler/test/topics/001. Sorts modules and respects asynchronicity/mod2/sync-mod-2.1.js    │
// │   · [4] pax_compiler/test/topics/001. Sorts modules and respects asynchronicity/mod2/async-mod-2.2.1.js │
// │   · [5] pax_compiler/test/topics/001. Sorts modules and respects asynchronicity/mod3.js                 │
// │   · [6] pax_compiler/test/topics/002. Sync and async work properly/test.js                              │
// │ + Loading wave 2/4:                                                                                     │
// │   · [7] pax_compiler/test/topics/001. Sorts modules and respects asynchronicity/mod1.js                 │
// │   · [8] pax_compiler/test/topics/001. Sorts modules and respects asynchronicity/mod2.js                 │
// │ + Loading wave 3/4:                                                                                     │
// │   · [9] pax_compiler/test/topics/001. Sorts modules and respects asynchronicity/test.js                 │
// │   · [10] pax_compiler/test/topics/001. Sorts modules and respects asynchronicity/mod2/async-mod-2.2.js  │
// │ + Loading wave 4/4:                                                                                     │
// │   · [11] pax_compiler/test/entry.made.js                                                                │
// └─────────────────────────────────────────────────────────────────────────────────────────────────────────┘
(function(Pax) {
// ┌─────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────┐
// │ @module[1]: Pax.modules["pax_compiler/test/topics/001. Sorts modules and respects asynchronicity/mod1/sync-mod-1.1.js"] │
// └─────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────┘
  (function(module) {
    try {
      module.exports = 800;
    } finally {
      Pax.modules["pax_compiler/test/topics/001. Sorts modules and respects asynchronicity/mod1/sync-mod-1.1.js"] = module.exports;
    }
  })({ exports: undefined });
// ┌─────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────┐
// │ @module[2]: Pax.modules["pax_compiler/test/topics/001. Sorts modules and respects asynchronicity/mod1/sync-mod-1.2.js"] │
// └─────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────┘
  (function(module) {
    try {
      module.exports = 600;
    } finally {
      Pax.modules["pax_compiler/test/topics/001. Sorts modules and respects asynchronicity/mod1/sync-mod-1.2.js"] = module.exports;
    }
  })({ exports: undefined });
// ┌─────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────┐
// │ @module[3]: Pax.modules["pax_compiler/test/topics/001. Sorts modules and respects asynchronicity/mod2/sync-mod-2.1.js"] │
// └─────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────┘
  (function(module) {
    try {
      module.exports = 801;
    } finally {
      Pax.modules["pax_compiler/test/topics/001. Sorts modules and respects asynchronicity/mod2/sync-mod-2.1.js"] = module.exports;
    }
  })({ exports: undefined });
// ┌────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────┐
// │ @module[4]: Pax.modules["pax_compiler/test/topics/001. Sorts modules and respects asynchronicity/mod2/async-mod-2.2.1.js"] │
// └────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────┘
  (function(module) {
    try {
      module.exports = 402;
    } finally {
      Pax.modules["pax_compiler/test/topics/001. Sorts modules and respects asynchronicity/mod2/async-mod-2.2.1.js"] = module.exports;
    }
  })({ exports: undefined });
// ┌────────────────────────────────────────────────────────────────────────────────────────────────────────────┐
// │ @module[5]: Pax.modules["pax_compiler/test/topics/001. Sorts modules and respects asynchronicity/mod3.js"] │
// └────────────────────────────────────────────────────────────────────────────────────────────────────────────┘
  (function(module) {
    try {
      module.exports = (async function() {
        return 200;
      })();
    } finally {
      Pax.modules["pax_compiler/test/topics/001. Sorts modules and respects asynchronicity/mod3.js"] = module.exports;
    }
  })({ exports: undefined });
// ┌───────────────────────────────────────────────────────────────────────────────────────────────┐
// │ @module[6]: Pax.modules["pax_compiler/test/topics/002. Sync and async work properly/test.js"] │
// └───────────────────────────────────────────────────────────────────────────────────────────────┘
  (function(module) {
    try {
      
    } finally {
      Pax.modules["pax_compiler/test/topics/002. Sync and async work properly/test.js"] = module.exports;
    }
  })({ exports: undefined });
// ┌────────────────────────────────────────────────────────────────────────────────────────────────────────────┐
// │ @module[7]: Pax.modules["pax_compiler/test/topics/001. Sorts modules and respects asynchronicity/mod1.js"] │
// └────────────────────────────────────────────────────────────────────────────────────────────────────────────┘
  (function(module) {
    try {
      const one = Pax.sync("pax_compiler/test/topics/001. Sorts modules and respects asynchronicity/mod1/sync-mod-1.1.js");
      const two = Pax.sync("pax_compiler/test/topics/001. Sorts modules and respects asynchronicity/mod1/sync-mod-1.2.js");
      
      module.exports = { one, two };
    } finally {
      Pax.modules["pax_compiler/test/topics/001. Sorts modules and respects asynchronicity/mod1.js"] = module.exports;
    }
  })({ exports: undefined });
// ┌────────────────────────────────────────────────────────────────────────────────────────────────────────────┐
// │ @module[8]: Pax.modules["pax_compiler/test/topics/001. Sorts modules and respects asynchronicity/mod2.js"] │
// └────────────────────────────────────────────────────────────────────────────────────────────────────────────┘
  (function(module) {
    try {
      module.exports = {
        one: Pax.sync("pax_compiler/test/topics/001. Sorts modules and respects asynchronicity/mod2/sync-mod-2.1.js"),
        two: Pax.sync("pax_compiler/test/topics/001. Sorts modules and respects asynchronicity/mod2/async-mod-2.2.js"),
      };
    } finally {
      Pax.modules["pax_compiler/test/topics/001. Sorts modules and respects asynchronicity/mod2.js"] = module.exports;
    }
  })({ exports: undefined });
// ┌────────────────────────────────────────────────────────────────────────────────────────────────────────────────────┐
// │ @module[9]: (async) Pax.modules["pax_compiler/test/topics/001. Sorts modules and respects asynchronicity/test.js"] │
// └────────────────────────────────────────────────────────────────────────────────────────────────────────────────────┘
  (function(module) {
    try {
      const mod1 = Pax.async("pax_compiler/test/topics/001. Sorts modules and respects asynchronicity/mod1.js");
      const mod2 = Pax.async("pax_compiler/test/topics/001. Sorts modules and respects asynchronicity/mod2.js");
      const mod3 = Pax.async("pax_compiler/test/topics/001. Sorts modules and respects asynchronicity/mod3.js");
      
      console.log("mod1", mod1);
      console.log("mod2", mod2);
      console.log("mod3", mod3);
    } finally {
      Pax.modules["pax_compiler/test/topics/001. Sorts modules and respects asynchronicity/test.js"] = module.exports;
    }
  })({ exports: undefined });
// ┌───────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────┐
// │ @module[10]: (async) Pax.modules["pax_compiler/test/topics/001. Sorts modules and respects asynchronicity/mod2/async-mod-2.2.js"] │
// └───────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────┘
  (function(module) {
    try {
      module.exports = Pax.async("pax_compiler/test/topics/001. Sorts modules and respects asynchronicity/mod2/async-mod-2.2.1.js");
    } finally {
      Pax.modules["pax_compiler/test/topics/001. Sorts modules and respects asynchronicity/mod2/async-mod-2.2.js"] = module.exports;
    }
  })({ exports: undefined });
// ┌─────────────────────────────────────────────────────────────┐
// │ @module[11]: Pax.modules["pax_compiler/test/entry.made.js"] │
// └─────────────────────────────────────────────────────────────┘
  (function(module) {
    try {
      Pax.async("pax_compiler/test/topics/001. Sorts modules and respects asynchronicity/test.js");
      Pax.async("pax_compiler/test/topics/002. Sync and async work properly/test.js");
      
    } finally {
      Pax.modules["pax_compiler/test/entry.made.js"] = module.exports;
    }
  })({ exports: undefined });
// ┌─────────────────┐
// │ Pax Minimal API │
// └─────────────────┘
})(typeof Pax !== "undefined" ? Pax : {
  modules: {},
  settings: {"drivers":{"{@}":"pax_modules"}},
  sync: function(id) {
    return this.modules[id];
  },
  async: function(id) {
    return this.modules[id];
  },
});