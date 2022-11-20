const addNewUserNameForm = document.body.querySelector("#addNewUserForm");
let usersNames = [];

addNewUserNameForm.addEventListener("submit", async (event) => {
  event.preventDefault();

  const newUserNameInput = document.body.querySelector("#newUserNameInput");
  const newUserName = newUserNameInput.value.trim();
  const newUserLastNameInput = document.body.querySelector(
    "#newUserLastNameInput"
  );
  const newUserLastName = newUserLastNameInput.value.trim();

  try {
    // Pavyzdys, kai naudojami POST metodu grąžinti vardai.
    const response = await fetch("http://localhost:5000", {
      method: "POST",
      headers: { "Content-Type": "application/json; charset=UTF-8" },
      body: JSON.stringify({
        name: newUserName,
        lastName: newUserLastName, // arba tiesiog newUserName
      }),
    });

    newUserNameInput.value = "";
    newUserLastNameInput.value = "";
  } catch (error) {
    alert(error);
  }
});
