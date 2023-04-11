/**
 * TC: O(n)
 */
var twoSum = function (nums, target) {

    let mp = new Map();
    for (let i = 0; i < nums.length; i++) {
        let diff = target - nums[i]
        if (mp.has(diff)) {
            return [i, mp.get(diff)]
        }
        mp.set(nums[i], i)
    }
};

const arr = [1, 2, 3, 4, 0];
console.log('Two Sum', twoSum(arr, 4));

