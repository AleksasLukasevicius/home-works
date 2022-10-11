const showOnlyDigits = (arr) => arr.filter(element => typeof element === "number");
console.log(showOnlyDigits([1, 5, "a", "g", "z", 6]));