
function prefixSumArr (inputArr) {
    for (let index = 0; index < inputArr.length; index++) {
        inputArr[index] = (index === 0) ? inputArr[index] : inputArr[index] + inputArr[index - 1];
    }

    return inputArr;
};

const inputArr = [10, 20, 30, 5, 10];
console.log('Input Arr', inputArr);

const prefixSumArrData = prefixSumArr(inputArr);

/**
 * Q number of queries
 * TC: O(Q+N)
 */
function sumArr (queries) {

    queries.map((q, i) => {

        const leftIndex = q[0];
        const rightIndex = q[1];

        const sum = prefixSumArrData[rightIndex] - (prefixSumArrData[leftIndex-1]);
        console.log(`Sum of (${leftIndex}, ${rightIndex}) =`, sum);
    });
}

const queries = [[2, 4], [1, 3], [1, 2]];
sumArr(queries);