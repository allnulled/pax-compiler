module.exports = {
  modules: {},
  settings: __SETTINGS__,
  sync: function(id) {
    return this.modules[id];
  },
  async: function(id) {
    return this.modules[id];
  },
};