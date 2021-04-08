/**
 * Given a sorted array, find the index of the element with the given value.
 * Time complexity should be O(logN)
 *
 * @param {Array} array
 * @param {Number} value
 * @return {Number}
 *
 * @example
 * For ([1, 2, 3], 1) should return 0
 * For ([1, 2, 3], 2) should return 1
 *
 */
function findIndex(array, value) {
  const arr = array;
  const num = value;
  let low = 0;
  let high = arr.length - 1;
  let middle;
  while (low <= high) {
    middle = Math.round((high + low) / 2);
    const num1 = arr[middle];
    if (num1 === num) {
      break;
    }
    if (num1 > num) {
      high = middle - 1;
    } else {
      low = middle + 1;
    }
  }
  return middle;
}

module.exports = findIndex;
