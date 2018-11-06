/* eslint-disable no-unused-vars */

function split(arr) {
    let firstHalf = arr.slice(0, (arr.length) / 2);
    let secondHalf = arr.slice((arr.length) / 2);
    // console.log(firstHalf)
    // console.log(secondHalf)
    return [firstHalf, secondHalf];
}

function merge(arr) {
    let result = [];
    if (arr[0] < arr[1]) {
        result.push(arr[0], arr[1]);
    } else {
        result.push(arr[1], arr[0]);
    }
    return result;
}

function mergeSort(array, result = []) {
    // if (split(array)[0].length === 1){
    //     result.push(split(array)[0][0], split(array)[1]);
    // } else {
    //     mergeSort(split(array));
    // }

    // return merge(split(array));


    // if (split(array)[0].length < 2) {
    //     return merge(split(array));
    // } else {
    //     // console.log('too long');
    //     let arr1 = mergeSort(merge(split(array)[0]));
    //     let arr2 = mergeSort(merge(split(array)[1]));
    //     return mergeSort([arr1, arr2]);
    // }

    if (split(array)[0].length === 1) {
        result.push(split(array));
    } else {
        let half1 = split(array)[0];
        let half2 = split(array)[1];
        mergeSort(half1, result);
        mergeSort(half2, result);
    }
    return result;
}


let array = [1, 2, 3, 4, 5, 6];
// console.log(mergeSort([4, 2]));
console.log(mergeSort([4, 3, 2, 1]));
