/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
const twoSum = (nums, target) => {
  let map = new Map();

  for (const [i, num] of nums.entries()) {
      if (map.has(target - num)) {
          return [map.get(target - num), i]
      }
      map.set(num, i)
  }
}

console.log(twoSum([2,7,11,15], 26))