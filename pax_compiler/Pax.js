module.exports = {
  modules: {},
  promises: {},
  settings: __SETTINGS__,
  sync: function(id) {
    return this.modules[id];
  },
  async: function(id) {
    return this.modules[id];
  },
};