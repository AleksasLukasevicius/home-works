const loginForm = document.querySelector("form#login-form");

loginForm.addEventListener("submit", async (event) => {
  event.preventDefault();

  const emailInputValue = document
    .querySelector("input#email-input")
    .value.trim();
  const passwordInputValue = document
    .querySelector("input#password-input")
    .value.trim();

  try {
    const response = await fetch("http://localhost:5000/sign-in", {
      method: "POST",
      headers: { "Content-Type": "application/json; charset=UTF-8" },
      body: JSON.stringify({
        userName: emailInputValue,
        password: passwordInputValue,
      }),
    });

    if (response.ok) {
      document.body.querySelector("#login-form").reset();
      const data = await response.json();

      localStorage.setItem("token", data.token);

      window.location.assign(`./content.html`);
    }

    if (!response.status || response.status >= 400) {
      const message = await response.json();

      console.info({ message, response });

      alert(message.error);
    }
  } catch (error) {
    alert(error.message);
  }
});
