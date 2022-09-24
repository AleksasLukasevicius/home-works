const removeDuplicates = arr => [...new Set(arr)];
console.log(removeDuplicates([9, 9, 9, 1, 1, 3, 3, 4, 4, 5, 5, 5]));


const numbers = prompt("Remove Dublicate Numbers");

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