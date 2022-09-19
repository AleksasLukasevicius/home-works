document.querySelector("form").addEventListener("submit", (e) => {
    e.preventDefault();

    const fullName = e.target.elements.fullname.value.trim().split(" ");

    const userName = document.createElement("h1");
    userName.textContent = fullName[0];
    const userSurName = document.createElement("h1");
    userSurName.textContent = fullName[1];

    document.body.append(userName, userSurName);
})