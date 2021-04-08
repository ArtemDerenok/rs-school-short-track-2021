/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount(s1, s2) {
  const arr1 = s1.split('').sort();
  const arr2 = s2.split('').sort();
  let cnt1 = 0;
  let cnt2 = 0;
  for (let i = 0; i < arr1.length; i++) {
    for (let j = 0; j < arr2.length; j++) {
      if (arr1[i] === arr2[j]) {
        cnt1++;
      }
    }
    if (cnt1 === 1) {
      cnt2++;
      if (arr1[i + 1] === arr1[i]) {
        i++;
      }
    } else if (cnt1 > 1) {
      cnt2++;
    }
    cnt1 = 0;
  }
  return cnt2;
}

module.exports = getCommonCharacterCount;
