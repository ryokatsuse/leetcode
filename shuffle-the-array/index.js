/**
 * @param {number[]} nums
 * @param {number} n
 * @return {number[]}
 * @see https://leetcode.com/problems/shuffle-the-array/
 */

 // IE11対応しないならflatMapでいけそう
 // 最初にn番目までの要素を浅く作ってその後flatMapで順番にn個目の要素を差し込むように処理する
 // mapしてflat()でもいいけどこっちのほうがいい
const shuffle = (nums, n) => nums.slice(0, n).flatMap((x, i) => [x, nums[i + n]])

console.log(shuffle([1,3,7,8,9,0,3,6], 4))