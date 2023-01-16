const registerForm = document.querySelector("#register-form");

registerForm.addEventListener("submit", async (e) => {
  e.preventDefault();

  const emailInputValue = document.querySelector("#email-input").value.trim();
  const passwordInputValue = document
    .querySelector("#password-input")
    .value.trim();

  const user = JSON.stringify({
    email: emailInputValue,
    password: passwordInputValue,
  });

  try {
    const response = await fetch("http://localhost:5000/v1/auth/register", {
      method: "POST",
      headers: { "Content-Type": "application/json; charset=UTF-8" },
      body: JSON.stringify({
        email: emailInputValue,
        password: passwordInputValue,
      }),
    });

    if (response.ok) {
      registerForm.reset();

      alert("Registered successfuly");

      return window.location.assign(`./login.html`);
    }

    if (!response.ok || response.status >= 400) {
      const message = await response.json();
      alert(message.error);
    }
  } catch (error) {
    console.log(error);
    alert(error.message);
  }
});
