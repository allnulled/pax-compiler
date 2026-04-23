module.exports = {
  $modules: {},
  settings: {},
  module: function(id) {
    return this.$modules[id];
  },
  static: function(id) {
    return this.$modules[id];
  },
};