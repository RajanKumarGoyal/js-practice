
const inputArr = [0, 2, 4, 6, 8, 10, 8, 9, 10, 10, 5, 3];
console.log('Input array: ', inputArr);

function prefixSumArr (inputArr) {
    for (let index = 0; index < inputArr.length; index++) {
        inputArr[index] = (index === 0) ? inputArr[index] : inputArr[index] + inputArr[index - 1];
    }

    return inputArr;
};

const mData = prefixSumArr(inputArr);
const maxSum = mData[mData.length-1];

function excSelfSumArr (maxSum) {
    for (let index = 0; index < inputArr.length; index++) {
        inputArr[index] = maxSum - inputArr[index];
    }

    return inputArr;
}

console.log('inputArr', excSelfSumArr(maxSum));