/**
 * @param {number[]} nums
 * @return {number[]}
 * @see https://leetcode.com/problems/running-sum-of-1d-array/
 */

// [1,2,3,4] -> [1, 1+2, 1+2+3, 1+2+3+4]
// 加算代入でやってみる
const runningSum = nums =>{
  let firstNum = 0
  return nums.map(num => 
    firstNum += num)
};

console.log(runningSum([1,2,3,4,5]))