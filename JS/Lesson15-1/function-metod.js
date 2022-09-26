// const minits = prompt("Minutes", 1);
// console.info(sek = (`${minits * 60} sekonds`));

// const userAge = prompt("Your Age", 46);
// console.info(days = (`${userAge * 365} days`));

// const number = prompt("Number", 2);
// console.info(squareNumber = (`${number ** 2} square of ${number}`));

// const weight = prompt("Traingle wieght", 3);
// const height = prompt("Triangle height", 3);
// console.info(squareTriangle = (`${weight * height / 2} square of Triangle}`));

// const userName = prompt("Your Name", "Aleksas");
// console.info(lastNameChar = userName.charAt(userName.length - 1));
// const fn = (text) => text.charAt(text.length - 1);

// const userName = prompt("Your Name", "Aleksas");
// console.info(inversNameChar = userName.split("").reverse().join("").toLocaleLowerCase());
// // const fn = (text) => text.split("").reverse().join("").toLowerCase();

const values = prompt("Numbers");
const numbers = JSON.parse(`[${values}]`);
// const numbers = [-1, -100, -5, 10, 0, 11];
console.info(numbers)
const getBigestNumber = (nums) => nums.filter(x => x < 0).sort((a, b) => b - a)[0];
console.info(getBigestNumber(numbers));


// const quant = prompt("Your Number");
// const randomNumbers = (quant) => {
//     const generatedNums = [];
//     for (let i = 0; i < quant; i++) {
//         generatedNums.push(Math.floor(Math.random() * 10) + 1)
//     }
//     return generatedNums;
// }
// console.info(randomNumbers(quant));


// const n1 = prompt("First Number");
// const n2 = prompt("Second Number");
// const sumOverHundred = (n1, n2) => n1 + n2 > 100;
// console.info(sumOverHundred(n1, n2));


// const users = [
//     { name: "Alfredas", age: 25 },
//     { name: "Jonas", age: 25 },
//     { name: "Kasparas", age: 20 }];
// const sortByAgeName = (users) => users.sort((a, b) => a.name > b.name ? 1 : -1).sort((a, b) => a.age - b.age);
// console.info(sortByAgeName(users));

// const date = prompt("What the date", "2020-01-01");
// function isItHoliday(date) {
//     const holidays = ["2020-01-01", "2020-05-25"];
//     return holidays.some(holiday => (new Date(holiday)).getDate() === date.getDate())
// }

// console.log(isItHoliday(new Date(date)));


// const array = [1, 5];
// const missingNumber = (array) => array.find((x, i) => x + 1 !== array[i + 1]) + 1;
// console.info(missingNumber(array));
