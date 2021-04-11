/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  let str1 = '';
  let cnt = 0;
  for (let i = 0; i < str.length; i++) {
    if (str[i] === str[i + 1]) {
      cnt++;
    } else {
      cnt++;
      if (cnt === 1) {
        str1 += `${str[i]}`;
      } else {
        str1 += `${cnt}${str[i]}`;
      }
      cnt = 0;
    }
  }
  return str1;
}

module.exports = encodeLine;
