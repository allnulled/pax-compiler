module.exports = async function () {
  trace("PaxCompiler.prototype.loadSettings", arguments, false);
  if(this.settings) {
    return this.settings;
  }
  const settingsJson = await this.constructor.utils.fetchResource("pax_settings.json");
  const settings = JSON.parse(settingsJson);
  this.settings = settings;
  return this.settings;
}