const userInfoSubmitButton = document.querySelectorAll("#user-info-submit-button");
const userParagraph = document.createElement('p');

userInfoSubmitButton.addEventListener("click", async () => {

    const userId = document.querySelector("#user-id-input").value.trim();

    const response = await fetch(`http://localhost:5000/${userId}`);
    const user = await response.json();

    userParagraph.textContent = JSON.stringify(user);

    document.body.append(userParagraph);

});