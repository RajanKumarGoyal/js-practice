
const inputArr = [0, 2, 4, 6, 8, 10, 8, 9, 10, 10, 5, 3];

/**
 * O(n)
 */
let maxNumber = -1;
for (let index = 0; index < inputArr.length; index++) {
    maxNumber = Math.max(maxNumber, inputArr[index]);
}

/**
 * O(n)
 */
let count = 0;
for (let index = 0; index < inputArr.length; index++) {
    count = (maxNumber === inputArr[index]) ? ++count : count;
}

/**
 * O(n)
 */
console.log('Output', (inputArr.length - count));