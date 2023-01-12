const signInForm = document.querySelector("form#signIn-form");

signInForm.addEventListener("submit", async (event) => {
  event.preventDefault();

  const userIdInputValue = document.querySelector("#UserId-input").value.trim();
  const passwordInputValue = document
    .querySelector("#password-input")
    .value.trim();

  try {
    const response = await fetch("http://localhost:5001/sign-in", {
      method: "POST",
      headers: { "Content-Type": "application/json; character=UTF-8" },
      body: JSON.stringify({
        userName: userIdInputValue,
        password: passwordInputValue,
      }),
    });

    const authorizationData = await response.json();
    if (!response.ok || response.status >= 400) {
      return alert(authorizationData?.error || response.statusText);
    }
    localStorage.setItem("accessToken", authorizationData.accessToken);
  } catch (error) {
    alert(error.authorizationData);
    return console.error(error);
  }
});
