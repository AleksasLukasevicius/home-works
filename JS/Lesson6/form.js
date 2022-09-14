document.querySelector("form").addEventListener("submit", myFunction);

function myFunction(e) {
    e.preventDefault();
    const userName = document.querySelector("input[name=name]").value;
    const userAge = document.querySelector("input[age=tekstas]").value;

    document.querySelector("h1").textContent = userName;
    document.querySelector("h2").textContent = userAge;
}

function userLeagalAge() {
}