function Person(name, surname) {
    this.name = name;
    this.surname = surname;
    this.addToTable = function () {
        const nameColumn = document.createElement('td');
        nameColumn.textContent = this.name;

        const surnameColumn = document.createElement('td');
        surnameColumn.textContent = this.surname;

        const tr = document.createElement('tr');
        tr.append(nameColumn, surnameColumn);
        document.querySelector('table > tbody').append(tr);
    };
}

const capitalize = (text) => text.charAt(0).toUpperCase() + text.slice(1).toLowerCase();

document.querySelector('form').addEventListener('submit', (event) => {
    event.preventDefault();

    const fullname = document.getElementById('fullname').value;
    const [name, surname] = fullname.split(' ').map(namePart => capitalize(namePart.trim()));

    const person = new Person(name, surname);
    person.addToTable();
});


