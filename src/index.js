module.exports = function reverse (n) {
  let str = String(Math.abs(n));
  let result = '';

  for (let i = 0; i < str.length; i++) {
      result = `${str[i]}${result}`;
  }

  return +result;
}
