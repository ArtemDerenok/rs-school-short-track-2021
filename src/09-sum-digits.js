/**
 * Given a number, replace this number with
 * the sum of its digits until we get to a one digit number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For 100, the result should be 1 (1 + 0 + 0 = 1)
 * For 91, the result should be 1 (9 + 1 = 10, 1 + 0 = 1)
 *
 */
function getSumOfDigits(n) {
  function sumNum(num) {
    let sum = 0;
    let num1 = num;
    num1 = String(num1);
    const arr = num1.split('');
    for (let i = 0; i < arr.length; i++) {
      sum += (+arr[i]);
    }
    if (sum >= 10) {
      sum = sumNum(sum);
    }
    return sum;
  }

  const num = n;
  if (num < 10) {
    return num;
  }
  const sum1 = sumNum(num);
  return sum1;
}

module.exports = getSumOfDigits;
