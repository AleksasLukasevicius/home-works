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

    document.getElementsByTagName('h2')[0].innerText = `Jūsų premija: ${bonus}`;
})


function isLeapYear(year) {
    return ((year % 4 == 0) && (year % 100 != 0)) || (year % 400 == 0);
}

// function isLeapYear(year) {
//     return (year % 100 === 0) ? (year % 400 === 0) : (year % 4 === 0);
// }

function handleFormSubmit(event) {
    event.preventDefault();

    const year = Number(document.getElementById("year").value);
    const outputElement = document.getElementsByTagName('h2')[1];

    if (isLeapYear(year)) {
        outputElement.textContent = "Metai keliamieji";
    } else {
        outputElement.textContent = "Metai nėra keliamieji";
    }
}

document.querySelector('form.leapyear').addEventListener('submit', handleFormSubmit);
// console.log(isLeapYear(2016));
// console.log(isLeapYear(2000));
// console.log(isLeapYear(1700));
// console.log(isLeapYear(1800));
// console.log(isLeapYear(100));


function convertToFarenheit(event) {
    const celciusInputValue = event.target.value;
    const outputElement = document.getElementsByTagName('h3')[0];
    if (celciusInputValue) {
        const celcius = Number(celciusInputValue);
        const farenheit = ((celcius * 1.8) + 32).toFixed(1);
        outputElement.innerText = farenheit;
    } else {
        outputElement.innerText = '';
    }
}

document.getElementsByTagName('form.celsius').addEventListener('input', convertToFarenheit)