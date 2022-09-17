document.querySelector("form").addEventListener("submit", myFunction);

function myFunction(event) {
    event.preventDefault();
    const userName = document.querySelector("input[name=name]").value;
    const userAge = document.querySelector("input[age=skaicius]").value;

    document.querySelector("h1").textContent = userName;
    document.querySelector("h2").textContent = `Tavo amžius: ${userAge}`;

    const userLegalAge = userAge;
    userLegalAge > 18 ? document.querySelector("h3").textContent = `Vairuoti gali: ${userName}` :
        document.querySelector("h3").textContent = `Dar mokysis vairuotis: ${userName}`

}