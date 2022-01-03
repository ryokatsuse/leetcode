/**
 * @param {number} x
 * @return {boolean}
 */
const isPalindrome = (x) => {
  return [...x.toString()].reverse().join('') === x
};

console.log(isPalindrome(232))