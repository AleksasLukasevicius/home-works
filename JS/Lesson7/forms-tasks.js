const form = document.querySelector("form");

form.addEventListener("submit", (evebt) => {
    event.preventDefault();

    const years = document.getElementById(age).value;

    const bonus = 50;
    if (years >= 10) { bonus += 50; }
    if (years >= 20) { bonus += 100; }

    document.getElementById("h2").innerText = `Jūsų premija: ${bonus}`;
})