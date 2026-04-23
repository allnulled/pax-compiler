module.exports = async function (force = false) {
  trace("PaxCompiler.prototype.loadSettings", arguments, false);
  if(this.settings && (!force)) {
    return this.settings;
  }
  const settingsJson = await this.constructor.utils.fetchResource("pax_settings.json");
  const settings = JSON.parse(settingsJson);
  this.settings = settings;
  return this.settings;
}