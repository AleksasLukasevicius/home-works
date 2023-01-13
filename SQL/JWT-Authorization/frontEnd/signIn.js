const signInForm = document.querySelector("form#signIn-form");

signInForm.addEventListener("submit", async (event) => {
  event.preventDefault();

  const userIdInputValue = document.querySelector("#UserId-input").value.trim();
  const passwordInputValue = document.querySelector("#password-input").value;

  try {
    const response = await fetch("http://localhost:5001/sign-in", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        userName: userIdInputValue,
        password: passwordInputValue,
      }),
    });

    const authorizationData = await response.json();

    if (!response.ok || response.status >= 400) {
      return alert(authorizationData?.error || response.statusText);
    }

    console.info(authorizationData);

    localStorage.setItem("accessToken", authorizationData.accessToken);

    window.location.assign(`./userSettings.html`);

    return alert("Succesufuly logged in");
  } catch (error) {
    alert(error.authorizationData);
    return console.error(error);
  }
});
