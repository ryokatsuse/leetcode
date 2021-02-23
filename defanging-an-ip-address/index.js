/**
 * @param {string} address
 * @return {string}
 */

 // ES2021であれば以下でOK
const defangIPaddr = (address) => {
  return address.replaceAll('.', '[.]');
};

console.log(defangIPaddr('1.1.1.1'))

// ES2021以外であれば以下

const defangIPaddr2 = (address) => {
  return address.replace(/./g, '[.]');
};

console.log(defangIPaddr2('1.1.1.1'))