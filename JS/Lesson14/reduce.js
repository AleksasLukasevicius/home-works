const numbers = [13, 23, 5, 4];
console.info(numbers.reduce((a, v) => a + v, 0));

const cars = ["BMW", "MCB", "VWG", "Toyota", "AUDI"];
const charNumber = cars.reduce((a, v) => v.length === 3 ? a + 1 : a, 0);
console.info(charNumber);

const maxNumber = [3, 9, 13, 25, 31, 13, 23, 5, 4]
console.dir(maxNumber.reduce((a, v) => a > v ? a : v, 0));