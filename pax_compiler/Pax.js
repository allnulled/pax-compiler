// ┌──────────────────┐
// │ 🌐 Pax global 🌐 │
// └──────────────────┘
(function (mod) {
  if (typeof window !== 'undefined') window['Pax'] = mod;
  if (typeof global !== 'undefined') global['Pax'] = mod;
})(typeof Pax !== "undefined" ? Pax : {
  $modules: {},
  $promises: {},
  settings: {},
  layer: function(id) {
    return this;
  },
  module: function(id) {
    return this.$modules[id];
  },
  promise: function(id) {
    return this.$modules[id];
  },
  static: function(id) {
    return this.$modules[id];
  },
});