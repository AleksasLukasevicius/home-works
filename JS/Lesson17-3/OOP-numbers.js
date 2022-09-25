const numbers = prompt("Remove Dublicate Numbers");

const removeDuplicates = arr => [...new Set(arr)];
console.log(removeDuplicates(numbers));


function unique(arr) {
    return Array.from(new Set(arr));
}
// let values = [1, 1, 1, 2, 2, 2, 23, 3, 3];
console.info(unique(numbers));


function unique(arr) {
    let result = [];

    for (let str of arr) {
        if (!result.includes(str)) {
            result.push(str);
        }
    }

    return result;
}

let strings = numbers;

alert(unique(strings));