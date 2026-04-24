// Pax.async("null")

module.exports = new Promise(ok => {
  setTimeout(() => ok(900), 10);
});