function drawL(event) {
    const size = Number(event.target.value);
    const outputElement = document.getElementsByTagName('h1')[0];

    let output = '';
    for (i = 0; i < size - 1; i++) {
        output += 'L<br>';

    }
    for (j = 0; j < size; j++) {
        output += 'L'
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
        output += 'C'
    }
    output += '<br>'
    for (i = 0; i < size - 2; i++) {
        output += 'C<br>';
    }
    for (i = 0; i < size; i++) {
        output += 'C'
    }
    outputElement.innerHTML = output;
}

document.querySelector('form.c-letter').addEventListener('input', drawC)


function addNameToList(event) {
    const name = event.target.value.trim();
    const outputElement = document.getElementsByTagName('h3')[0];
    if (name) {
        outputElement.innerText += `${name},  `;
    }
}

document.querySelector('form.name-list').addEventListener('blur', addNameToList);