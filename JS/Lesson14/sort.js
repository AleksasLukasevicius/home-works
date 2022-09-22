//1 pratymas
const myFriendsNames = ["Petras", "Jonas", "Antanas", "Algirdas"];
console.info(myFriendsNames.sort());

//2 pratymas
const myFriendsNamesInvert = ["Petras", "Jonas", "Antanas", "Algirdas"];
console.info(myFriendsNamesInvert.sort((a, b) => b - a));
// console.info(myFriendsNamesInvert.sort((a, b) => b > a ? 1 : -1));

//3 pratymas
const numbers = [5, 10, 20, 11, 12, 1, 0, 14, 25];
console.info(numbers.sort((a, b) => b - a));

//4 pratymas
const number = [10, 5, 20, 4];
console.info(number.sort((a, b) => b - a)[0]);

