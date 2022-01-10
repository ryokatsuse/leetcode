/**
 * @param {string} s
 * @return {boolean}
 */
const isValid = (s) => {
  let memory = []
  // 以下の組み合わせしかありえない
  const parentheses = {
    ')':'(',
    '}':'{',
    ']':'['
  }

  for (const c of s) {
    if(parentheses[c]) {
      if(parentheses[c] !== memory.pop()) return false
    } else {
      memory.push(c)
    }
  }
  return memory.length === 0
};

console.log(isValid('({'))