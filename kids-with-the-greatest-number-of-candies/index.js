/**
 * @param {number[]} candies
 * @param {number} extraCandies
 * @return {boolean[]}
 * @see https://leetcode.com/problems/kids-with-the-greatest-number-of-candies/
 */

 // candies = [7,3,5] extraCandies = 2
 // [true, false, true]
const kidsWithCandies = (candies, extraCandies) => {
  const max =  Math.max(...candies)

  return candies.map((c) => c + extraCandies >= max);
};

console.log(kidsWithCandies([4,2,5], 1))