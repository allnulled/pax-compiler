// ┌─────────────────────────────────────────────────────────────────────────────┐
// │ Pax module                                                                  │
// ├─────────────────────────────────────────────────────────────────────────────┤
// │ + Loading wave 1/4:                                                         │
// │   · [1] pax_modules/std/kit/basic.js                                        │
// │   · [2] pax_compiler/test/topics/001. Sorts modules/mod1/sync-mod-1.1.js    │
// │   · [3] pax_compiler/test/topics/001. Sorts modules/mod1/sync-mod-1.2.js    │
// │   · [4] pax_compiler/test/topics/001. Sorts modules/mod2/sync-mod-2.1.js    │
// │   · [5] pax_compiler/test/topics/001. Sorts modules/mod2/async-mod-2.2.1.js │
// │   · [6] pax_compiler/test/topics/001. Sorts modules/mod3.js                 │
// │ + Loading wave 2/4:                                                         │
// │   · [7] pax_compiler/test/topics/001. Sorts modules/mod1.js                 │
// │   · [8] pax_compiler/test/topics/001. Sorts modules/mod2.js                 │
// │ + Loading wave 3/4:                                                         │
// │   · [9] pax_compiler/test/topics/001. Sorts modules/mod2/async-mod-2.2.js   │
// │ + Loading wave 4/4:                                                         │
// │   · [10] pax_compiler/test/entry.js                                         │
// └─────────────────────────────────────────────────────────────────────────────┘
(function(Pax) {
// ┌──────────────────────────────────────────────────────────┐
// │ @module[1]: Pax.$modules["pax_modules/std/kit/basic.js"] │
// └──────────────────────────────────────────────────────────┘
  (function(module) {
    try {
      console.log("Hello");
      
    } finally {
      Pax.$modules["pax_modules/std/kit/basic.js"] = module.exports;
    }
  })({ exports: undefined });
// ┌──────────────────────────────────────────────────────────────────────────────────────────────┐
// │ @module[2]: Pax.$modules["pax_compiler/test/topics/001. Sorts modules/mod1/sync-mod-1.1.js"] │
// └──────────────────────────────────────────────────────────────────────────────────────────────┘
  (function(module) {
    try {
      module.exports = 800;
    } finally {
      Pax.$modules["pax_compiler/test/topics/001. Sorts modules/mod1/sync-mod-1.1.js"] = module.exports;
    }
  })({ exports: undefined });
// ┌──────────────────────────────────────────────────────────────────────────────────────────────┐
// │ @module[3]: Pax.$modules["pax_compiler/test/topics/001. Sorts modules/mod1/sync-mod-1.2.js"] │
// └──────────────────────────────────────────────────────────────────────────────────────────────┘
  (function(module) {
    try {
      module.exports = 600;
    } finally {
      Pax.$modules["pax_compiler/test/topics/001. Sorts modules/mod1/sync-mod-1.2.js"] = module.exports;
    }
  })({ exports: undefined });
// ┌──────────────────────────────────────────────────────────────────────────────────────────────┐
// │ @module[4]: Pax.$modules["pax_compiler/test/topics/001. Sorts modules/mod2/sync-mod-2.1.js"] │
// └──────────────────────────────────────────────────────────────────────────────────────────────┘
  (function(module) {
    try {
      module.exports = 800;
    } finally {
      Pax.$modules["pax_compiler/test/topics/001. Sorts modules/mod2/sync-mod-2.1.js"] = module.exports;
    }
  })({ exports: undefined });
// ┌─────────────────────────────────────────────────────────────────────────────────────────────────┐
// │ @module[5]: Pax.$modules["pax_compiler/test/topics/001. Sorts modules/mod2/async-mod-2.2.1.js"] │
// └─────────────────────────────────────────────────────────────────────────────────────────────────┘
  (function(module) {
    try {
      module.exports = 400;
    } finally {
      Pax.$modules["pax_compiler/test/topics/001. Sorts modules/mod2/async-mod-2.2.1.js"] = module.exports;
    }
  })({ exports: undefined });
// ┌─────────────────────────────────────────────────────────────────────────────────┐
// │ @module[6]: Pax.$modules["pax_compiler/test/topics/001. Sorts modules/mod3.js"] │
// └─────────────────────────────────────────────────────────────────────────────────┘
  (function(module) {
    try {
      console.log("mod3!");
    } finally {
      Pax.$modules["pax_compiler/test/topics/001. Sorts modules/mod3.js"] = module.exports;
    }
  })({ exports: undefined });
// ┌─────────────────────────────────────────────────────────────────────────────────┐
// │ @module[7]: Pax.$modules["pax_compiler/test/topics/001. Sorts modules/mod1.js"] │
// └─────────────────────────────────────────────────────────────────────────────────┘
  (function(module) {
    try {
      console.log("mod1!");
      console.log(Pax.module("pax_compiler/test/topics/001. Sorts modules/mod1/sync-mod-1.1.js"));
      console.log(Pax.module("pax_compiler/test/topics/001. Sorts modules/mod1/sync-mod-1.2.js"));
    } finally {
      Pax.$modules["pax_compiler/test/topics/001. Sorts modules/mod1.js"] = module.exports;
    }
  })({ exports: undefined });
// ┌─────────────────────────────────────────────────────────────────────────────────┐
// │ @module[8]: Pax.$modules["pax_compiler/test/topics/001. Sorts modules/mod2.js"] │
// └─────────────────────────────────────────────────────────────────────────────────┘
  (function(module) {
    try {
      console.log("mod2!");
      console.log(Pax.module("pax_compiler/test/topics/001. Sorts modules/mod2/sync-mod-2.1.js"));
      console.log(Pax.module("pax_compiler/test/topics/001. Sorts modules/mod2/async-mod-2.2.js"));
    } finally {
      Pax.$modules["pax_compiler/test/topics/001. Sorts modules/mod2.js"] = module.exports;
    }
  })({ exports: undefined });
// ┌───────────────────────────────────────────────────────────────────────────────────────────────┐
// │ @module[9]: Pax.$modules["pax_compiler/test/topics/001. Sorts modules/mod2/async-mod-2.2.js"] │
// └───────────────────────────────────────────────────────────────────────────────────────────────┘
  (function(module) {
    try {
      module.exports = Pax.static("pax_compiler/test/topics/001. Sorts modules/mod2/async-mod-2.2.1.js");
    } finally {
      Pax.$modules["pax_compiler/test/topics/001. Sorts modules/mod2/async-mod-2.2.js"] = module.exports;
    }
  })({ exports: undefined });
// ┌─────────────────────────────────────────────────────────┐
// │ @module[10]: Pax.$modules["pax_compiler/test/entry.js"] │
// └─────────────────────────────────────────────────────────┘
  (function(module) {
    try {
      console.log("in entry");
      Pax.module("{@}/std/kit/basic.js");
      Pax.static("{@}/std/kit/basic.js");
      Pax.static("{@}/std/kit/basic.js");
      Pax.module("{@}/std/kit/basic.js");
      Pax.module("pax_compiler/test/topics/001. Sorts modules/mod1.js");
      Pax.module("pax_compiler/test/topics/001. Sorts modules/mod2.js");
      Pax.module("pax_compiler/test/topics/001. Sorts modules/mod3.js");
    } finally {
      Pax.$modules["pax_compiler/test/entry.js"] = module.exports;
    }
  })({ exports: undefined });
})(typeof Pax !== "undefined" ? Pax : {
  $modules: {},
  settings: {},
  module: function(id) {
    return this.$modules[id];
  },
  static: function(id) {
    return this.$modules[id];
  },
});