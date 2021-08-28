module.exports = function towelSort (matrix) {
  if (matrix === undefined || matrix.length < 1) return [];
  for (let k = 1; k < matrix.length; k += 2) {
    matrix[k] = matrix[k].reverse();
  }
  return matrix.flat();
}
