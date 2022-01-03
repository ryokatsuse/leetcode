/**
 * @param {number} x
 * @return {boolean}
 */
const isPalindrome = (x) => {
  const parseStringArray = x.toString().split('')
  const parseString = parseStringArray.join('')
  const reverseStringArray = parseStringArray.reverse()
  const reverseString = reverseStringArray.join('')
  return parseString === reverseString

};

console.log(isPalindrome(3231))