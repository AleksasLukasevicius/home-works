const form = document.querySelector("form.bonus");

form.addEventListener("submit", (event) => {
    event.preventDefault();

    const years = document.getElementById('age').value;

    let bonus = 50;
    if (years >= 10) {
        bonus += 50;
    }
    if (years >= 20) {
        bonus += 100;
    }
    console.info(bonus);

    document.getElementsByTagName('h2')[0].innerText = `Your's bonus is: ${bonus}`;
})


function isLeapYear(year) {
    return ((year % 4 == 0) && (year % 100 != 0)) || (year % 400 == 0);
}

// function isLeapYear(year) {
//     return (year % 100 === 0) ? (year % 400 === 0) : (year % 4 === 0);
// }

function handleFormSubmit(event) {
    event.preventDefault();

    const year = Number(document.getElementById("leapyear").value);
    const outputElement = document.getElementsByTagName('h2')[1];
    console.info(year);

    if (isLeapYear(year)) {
        outputElement.textContent = `${year} is leap year`;
    } else {
        outputElement.textContent = `The ${year} is not a leap year`;
    }
}

document.querySelector('form.leapyear').addEventListener('submit', handleFormSubmit);

// // console.log(isLeapYear(2016));
// // console.log(isLeapYear(2000));
// // console.log(isLeapYear(1700));
// // console.log(isLeapYear(1800));
// // console.log(isLeapYear(100));


function convertToFarenheit(event) {
    const celciusInputValue = event.target.value;
    const outputElement = document.getElementsByTagName('span')[0];
    if (celciusInputValue) {
        const celcius = Number(celciusInputValue);
        const farenheit = ((celcius * 1.8) + 32).toFixed(1);
        outputElement.innerText = farenheit;
    } else {
        outputElement.innerText = '';
    }
}

document.querySelector('form.celsius').addEventListener('input', convertToFarenheit)


function handleFormSubmit(event) {
    event.preventDefault();
    const email = document.getElementById('email').value;
    const didAgreeToGetLetter = document.getElementById('checked').checked;
    const outputElement = document.getElementsByTagName('h4')[0];
    outputElement.textContent = didAgreeToGetLetter ? `Email ${email} successfully registered` : 'Registration failed';
}

document.querySelector('form.mail').addEventListener('submit', handleFormSubmit);


function handleFormSubmit(event) {
    event.preventDefault();

    const name = document.getElementById('user-name').value;
    const numberOfElements = Number(document.getElementById('numberOfElements').value);
    const list = document.getElementsByTagName('ul')[0];

    console.info(name)

    list.innerHTML = '';

    for (let i = 0; i < numberOfElements; i++) {

        const listItem = document.createElement('li');

        listItem.innerText = name;
        list.append(listItem);
    }
}

document.querySelector('form.name').addEventListener('submit', handleFormSubmit);



function drawTriangle(event) {
    event.preventDefault();
    let triangleSize = Number(document.getElementById('triangleSize').value);
    const outputElement = document.getElementsByTagName('h5')[0];

    let output = '';
    for (i = 0; i < triangleSize; i++) {
        for (j = 0; j <= i; j++) {
            output += "*";
        }
        output += "<br>";
        outputElement.innerHTML = output;
    }
}

document.querySelector('form.triangle').addEventListener('submit', drawTriangle);