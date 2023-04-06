
/** Filter Arrays */

/************************ */
const inputValues = Object.values(counts);
const output = Math.max(...inputValues);
const f = Object.keys(counts).filter((index) => {
    if (counts[index] === output) {
        return index;
    }
});
/************************ */

const removeDuplicates = (input) => [...new Set(input)];
const uniqueInput = removeDuplicates(input);

/**************************************/

uniqueInput.reduce((previousValue, currentValue) => {
    if ((previousValue-currentValue) > difference) {
        difference = previousValue - currentValue;
    } else if ((currentValue-previousValue) > difference) {
        difference = currentValue - previousValue;
    }
    return currentValue;
}, difference);

/**************************************/


// const counts = {};
// const input = [1, 1, 4, 4, 5, 5, 1, 2, 4, 4, 4, 4, 5, 60, 20, 45, 1, 0];
// console.log('Input', input);

/** Find Maximum Count of Above Values */

// input.map((x) => counts[x] = (counts[x] || 0) + 1);
// const key = Object.keys(counts).reduce((a, b) => counts[a] > counts[b] ? a : b);
// console.log(`Max Count of Above Values of ${key} is ${counts[key]}`);

/** Find Maximum Difference */

// const soretedArr = input.sort((a, b) => a-b);
// const difference = (soretedArr.length > 1) ? soretedArr[soretedArr.length-1] - soretedArr[0] : 0;
// console.log(`Max Difference: ${difference}`);

/** Find the numbers of pairs of intezer whose sum is equal to sum */

// const inputSum = [1, 1, 1, 1, 2, 0, 5, 'a', 'b', -3];
// const sum = 2;
// let count = 0;

// for (let i = 0; i < inputSum.length; i++) {
//     for (let j = (i+1); j < inputSum.length; j++) {
//         const tmpSum = inputSum[i] + inputSum[j];
//         (tmpSum === sum) && count++;
//     }
// }

// // Output should be 8.
// console.log('Input:', inputSum, 'Sum', sum, 'Count', count);

/** Find the numbers of pairs of intezer whose sum is equal to sum */

// console.log('Hoisting', person);

// function getPersonInfo(one, two, three) {
//     console.log(one);
//     console.log(two);
//     console.log(three);
// }

// const person = 'Lydia';
// const age = 21;

// getPersonInfo`${person} is ${age} years old`;