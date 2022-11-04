const casual = require("casual");

const city = casual.city;
const randomNumber = (casual.random * 10).toFixed(0);

const randomPersonSuffix = casual.name_suffix;
const randomPersonFirstName = casual.first_name;
const randomPersonLastName = casual.last_name;

console.info(`${city} ${randomNumber}`);

console.info(`${randomPersonSuffix} ${randomPersonFirstName} ${randomPersonLastName}`);

// Generate object with randomly generated fields
casual.define('user', () => {
    return {
        email: casual.email,
        firstname: casual.first_name,
        lastname: casual.last_name,
        password: casual.password
    };
});

const user = casual.user;

console.info(user);