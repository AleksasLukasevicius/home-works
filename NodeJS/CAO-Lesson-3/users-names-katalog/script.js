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

    await renderNames();

    newUserNameInput.textContent = "";
  } catch (error) {
    alert(error);
  }
});

const renderNames = async () => {
  const usersNameList = document.querySelector("#usersNameList");

  const response = await fetch(HOSTNAME);
  const usersNames = await response.json();

  console.info(response, usersNames);

  usersNames.forEach((newUserName) => {
    const userNameElement = document.createElement("li");

    userNameElement.innerText = newUserName;
    usersNameList.append(userNameElement);
  });
};

console.info({ usersNameList });

renderNames();
