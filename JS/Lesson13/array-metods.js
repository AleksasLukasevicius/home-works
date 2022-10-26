// 2 pratymas
const cars = ["BMW", "VW", "Audi"];
cars.forEach((v, i) => console.info(`${i}: ${v}`));

// 3 pratymas
const friendsNames = ["peTras", "Jonas", "aNTanaS", "aLgiRdas"];
const myFriendsNames = friendsNames.map((name) => name[0].toUpperCase() + name.slice(1).toLowerCase());
console.info(myFriendsNames);

// 4 pratymas
const myFriendsAge = [46, 35, 50, 44, 11, 13, 70];
const oldFriendsAge = myFriendsAge.filter((age) => age >= 18);
console.info(oldFriendsAge);

// 5 pratymas
const ltCities = ["Vilnius", "Kaunas", "Klaipėda", "Šiauliai", "Panevėžys"];
const ltCitiesK = ltCities.find((city) => city[0] === "K");
console.info(ltCitiesK);

// 6 pratymas
const isFirstLaterLower = ltCities.some((city) => city[0] === city[0].toLocaleLowerCase());
console.info(isFirstLaterLower);

// 7 pratymas
const isFirstLetterUpperAll = ltCities.every((city) => city[0] === city[0].toLocaleUpperCase());
console.info(isFirstLetterUpperAll);






