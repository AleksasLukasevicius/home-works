document.querySelector("form").addEventListener("submit", (e) => {
    e.preventDefault();

    const fullName = e.target.elements.fullname.value.trim();

    const userName = document.createElement("h1");
    userName.textContent = fullName.split(" ")[0];

    const userSurName = document.createElement("h1");
    userSurName.textContent = fullName.replace(userName, " ").slice(7);

    document.body.append(userName, userSurName);
})