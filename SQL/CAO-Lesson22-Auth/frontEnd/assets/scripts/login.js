const loginForm = document.querySelector("#login-form");

loginForm.addEventListener("submit", async (event) => {
  event.preventDefault();

  const emailInputValue = document.querySelector("#email-input").value.trim();
  const passwordInputValue = document
    .querySelector("#password-input")
    .value.trim();

  try {
    const response = await fetch(
      "http://localhost:5000/v1/authorization/login",
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
      loginForm.reset();
      const userData = await response.json();

      localStorage.setItem("token", userData.token);

      document.cookie = `accessToken=${userData.token}; SameSite=None; Secure`;

      window.location.assign(`./content.html`);
    }

    if (!response.ok || response.status >= 400) {
      const message = await response.json();

      alert(message.error || message.statusText);
    }
  } catch (error) {
    alert(error.message);
  }
});
