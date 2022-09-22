// 2 pratymas
const cars = ["BMW", "VW", "Audi"];
cars.forEach((v, i) => console.info(i + ": " + v));

// 3 pratymas
const friendsNames = ["peTras", "Jonas", "aNTanaS", "aLgiRdas"];
const myFriendsNames = friendsNames.map((v) => v.charAt(0).toUpperCase() + v.slice(1).toLowerCase());
console.info(myFriendsNames);

// 4 pratymas
const myFriendsAge = [46, 35, 50, 44, 11, 13, 70];
const oldFriendsAge = myFriendsAge.filter((v) => v >= 18);
console.info(oldFriendsAge);

// 5 pratymas
const ltCities = ["Vilnius", "Kaunas", "Klaipėda", "Šiauliai", "Panevėžys"];
const ltCitiesK = ltCities.find((v) => v.charAt(0) === "K");
console.info(ltCitiesK);

// 6 pratymas
const isLowerLaterFirst = ltCities.some((v) => v.charAt(0) === v.charAt(0).toLocaleLowerCase());
console.info(isLowerLaterFirst);

// 7 pratymas
const isFirstLetterAll = ltCities.every((v) => v.charAt(0) === v.charAt(0).toLocaleUpperCase());
console.info(isFirstLetterAll);






