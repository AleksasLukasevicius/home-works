const registerForm = document.querySelector("#register-form");

registerForm.addEventListener("submit", async (event) => {
  event.preventDefault();

  const emailInputValue = document.querySelector("#email-input").value.trim();
  const passwordInputValue = document
    .querySelector("#password-input")
    .value.trim();

  try {
    const response = await fetch(
      "http://localhost:5000/v1/authorization/register",
      {
        method: "POST",
        headers: { "Content-Type": "application/json; charset=UTF-8" },
        body: JSON.stringify({
          email: emailInputValue,
          password: passwordInputValue,
        }),
      }
    );

    if (response.ok) {
      document.body.querySelector("#register-form").reset();

      window.location.assign(`./login.html`);
    }

    if (response.status >= 400) {
      const message = await response.json();

      alert(message.error);
    }
  } catch (error) {
    alert(error.message);
  }
});
