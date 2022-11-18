const addNewUserNameForm = document.body.querySelector("#addNewUserNameForm");
const HOSTNAME = "http://localhost:5000/";

addNewUserNameForm.addEventListener("submit", async (event) => {
  event.preventDefault();

  const newUserNameInput = document.body.querySelector("#newUserNameInput");
  const newUserName = newUserNameInput.value.trim();

  try {
    await fetch(HOSTNAME, {
      method: "POST",
      headers: { "Content-Type": "application/json; charset=UTF-8" },
      body: JSON.stringify({
        name: newUserName, // arba tiesiog newUserName
      }),
    });

    usersNames = await response.json();

    await renderNames();

    newUserNameInput.value = "";
  } catch (error) {
    alert(error);
  }
});

const renderNames = async (isInitialRender) => {
  if (isInitialRender) {
    const response = await fetch(HOSTNAME);
    usersNames = await response.json();
  }

  const usersNamesList = document.querySelector("#usersNameList");

  const response = await fetch(HOSTNAME);
  usersNames = await response.json();

  usersNames.forEach((newUserName) => {
    const userNameElement = document.createElement("li");

    userNameElement.innerText = newUserName;
    usersNamesList.append(userNameElement);
  });
};

renderNames();
