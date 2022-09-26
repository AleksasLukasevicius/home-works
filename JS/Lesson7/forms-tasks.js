const form = document.querySelector("form");

form.addEventListener("submit", (event) => {
    event.preventDefault();

    const years = document.getElementById('age').value;
    console.info(years);

    let bonus = 50;
    if (years >= 10) {
        bonus += 50;
    }
    if (years >= 20) {
        bonus += 100;
    }

    document.getElementsByClassName('h2').innerText = `Jūsų premija: ${bonus}`;
})