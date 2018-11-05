function split(arr) {
    let firstHalf = arr.slice(0, (arr.length) / 2);
    let secondHalf = arr.slice((arr.length) / 2);
    return [firstHalf, secondHalf];
}

function merge(arr1, arr2) {
    let result = [];
    if (arr1[0] < arr2[0]){
        result.push(arr1[0], arr2[0]);
    } else {
        result.push(arr2[0], arr1[0]);
    } return result;
}

console.log(merge([54], [2]));

let array = [1, 2, 3, 4, 5, 6];
console.log(split(array));
