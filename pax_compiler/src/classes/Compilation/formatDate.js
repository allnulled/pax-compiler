module.exports = function(date) {
  const pad = (n, size = 2) => String(n).padStart(size, '0');
  const year = date.getFullYear();
  const month = pad(date.getMonth() + 1); // 0-11
  const day = pad(date.getDate());
  const hours = pad(date.getHours());
  const minutes = pad(date.getMinutes());
  const seconds = pad(date.getSeconds());
  const ms = pad(date.getMilliseconds(), 3);
  return `${year}/${month}/${day} ${hours}:${minutes}:${seconds}.${ms}`;
}