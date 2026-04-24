module.exports = {
  modules: {},
  promises: {},
  settings: __SETTINGS__,
  resolveDriver: function(text) {
    let output = text;
    const drivers = this.settings?.drivers || {};
    for(const key in drivers) {
      const value = drivers[key];
      output = text.replace(key, value);
    }
    return output;
  },
  find: function(id) {
    const normalizedId = this.resolveDriver(id);
    if(!(normalizedId in this.modules)) {
      throw new Error(`Module not found by Pax: «${normalizedId}»`);
    }
    return this.modules[normalizedId];
  },
  sync: function(id) {
    return this.find(id);
  },
  async: function(id) {
    return this.find(id);
  },
};