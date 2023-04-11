
const arr = [1, 2, 3, 4, 5, 6, 7, 8];
const k = 4;

// Expected Output : 5, 6, 7, 8, 1, 2, 3, 4

function arrReverse(firstIndex, lastIndex) {

    let z = 0;
    while(firstIndex < lastIndex) {
        z = arr[lastIndex];
        arr[lastIndex] = arr[firstIndex];
        arr[firstIndex] = z;

        firstIndex++; lastIndex--;
    }
}

// arrReverse(0, 7);
// // 8 7 6 5 4 3 2 1

// arrReverse(0, k-1);
// // 5 6 7 8 4 3 2 1

// arrReverse(k, arr.length-1);
// // 5 6 7 8 1 2 3 4

// console.log('Output', arr);

function arrConcat() {

    const expectedLength = arr.length * 2;
    let i = 0;

    for (let index = arr.length; index < expectedLength; index++) {
        arr[index] = arr[i];
        i++;
    }
}

arrConcat();

console.log('arrConcat', arr);

