function split(arr) {
    let firstHalf = arr.slice(0, (arr.length) / 2);
    let secondHalf = arr.slice((arr.length) / 2);
    if (arr.length === 1) {
        return [firstHalf, secondHalf];
    }

}

let array = [1, 2, 3, 4, 5, 6];
console.log(split(array))