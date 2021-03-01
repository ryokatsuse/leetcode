/**
 * @param {number[]} nums
 * @return {number[]}
 * @see https://leetcode.com/problems/how-many-numbers-are-smaller-than-the-current-number/
 */
const smallerNumbersThanCurrent = (nums) => {
  const sortedNums = [...nums].sort((a,b) => b-a),
        numsIndexLength = nums.length - 1;
  return nums.map(val => numsIndexLength - sortedNums.lastIndexOf(val));
};

smallerNumbersThanCurrent([8,1,2,2,3])