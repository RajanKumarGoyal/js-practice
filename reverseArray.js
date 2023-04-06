
const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 15, 18, 11, 10];
console.log('Input Arr', arr);

function reverseArr() {

    let z = 0;
    const arrCountIndex = arr.length - 1;

    for (let index = 0; index < arr.length; index++) {

        const condition = (arr.length % 2 === 0) ? '>' : '===';
        if (eval(index + condition + (arrCountIndex - index))) {
            break;
        } else {
            z = arr[index];
            arr[index] = arr[arrCountIndex - index];
            arr[arrCountIndex - index] = z;
        }
    }

    console.log('reverseArr', arr);
};

// reverseArr();

function twoPointer() {
    let p1 = 0;
    let p2 = arr.length - 1;

    while (p1 < p2) {
        const temp = arr[p1];
        arr[p1] = arr[p2];
        arr[p2] = temp;

        p1++; p2--;
    }

    console.log("two", arr);
}

twoPointer();