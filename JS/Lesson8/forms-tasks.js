function drawL(event) {
    const size = Number(event.target.value);
    const outputElement = document.getElementsByTagName('h1')[0];

    let output = '';
    for (i = 0; i < size - 1; i++) {
        output += '<p>×</p>';

    }
    for (j = 0; j < size; j++) {
        output += '×'
    }
    outputElement.innerHTML = output;
}

document.querySelector('form.l-letter').addEventListener('input', drawL)


function drawC(event) {
    const size = Number(event.target.value);
    const outputElement = document.getElementsByTagName('h2')[0];

    if (size < 3) {
        outputElement.innerHTML = 'C letter size must be at least 3';
        return;
    }

    let output = '';
    for (i = 0; i < size; i++) {
        output += '×'
    }
    output += '<p></p>'
    for (i = 0; i < size - 2; i++) {
        output += '<p>×</p>';
    }
    for (i = 0; i < size; i++) {
        output += '×'
    }
    outputElement.innerHTML = output;
}

document.querySelector('form.c-letter').addEventListener('input', drawC)


function addNameToList(event) {
    const name = event.target.value.trim();
    const outputElement = document.getElementsByTagName('h3')[0];
    if (name) {
        outputElement.innerText += ` ${name},`;
    }
}

document.getElementById('name').addEventListener('blur', addNameToList);



function alertNearestNumber(n1, n2) {

    const firstNumber = Math.abs(100 - n1);
    const secondNumber = Math.abs(100 - n2);

    if (firstNumber == secondNumber) {
        alert(`Equal`);
    }

    else if (firstNumber > secondNumber) {
        alert(n2);
    }

    else {
        alert(n1);
    }
}

function handleFormSubmit(event) {
    event.preventDefault();

    const n1 = Number(document.getElementById('number1').value);
    const n2 = Number(document.getElementById('number2').value);

    alertNearestNumber(n1, n2);
}

document.getElementById('nearest-numbers').addEventListener('submit', handleFormSubmit);