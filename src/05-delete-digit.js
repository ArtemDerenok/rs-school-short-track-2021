/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  let num = n;
  num = String(num);
  const arr1 = num.split('');
  let min = +arr1[0];
  for (let i = 0; i < arr1.length; i++) {
    if (+arr1[i] <= min) {
      min = +arr1[i];
    }
  }
  for (let j = 0; j < arr1.length; j++) {
    if (+arr1[j] === min) {
      arr1.splice(j, 1);
      break;
    }
  }
  return +arr1.join('');
}

module.exports = deleteDigit;
