
exports.min = function min (array) {
  if (!array || array.length == 0) return 0;
  const result = array.sort((a, b) => { return a - b });
  return result[0];
}

exports.max = function max (array) {
  if (!array || array.length == 0) return 0;
  const result = array.sort((a, b) => { return a - b });
  return result[array.length - 1];
}

exports.avg = function avg (array) {
  if (!array || array.length == 0) return 0;
  const result = array.reduce((a, b) => { return a + b });
  return result / array.length;
}
