/**
 * @param {number[][]} accounts
 * @return {number}
 * @see https://leetcode.com/problems/richest-customer-wealth/
 */

 // 愚直にfor文で書く。でもこれだとletが多いので書き直したい
const maximumWealth = (accounts) => {
  let max = 0
  for (let index = 0; index < accounts.length; index++) {
    let sum = 0
    for (let j = 0; j < accounts[index].length; j++) {
      sum += accounts[index][j]
    }
    if(sum > max) max = sum
  }
  return max
  };

console.log(maximumWealth([[1,5],[7,3],[3,5],[9,10]]))