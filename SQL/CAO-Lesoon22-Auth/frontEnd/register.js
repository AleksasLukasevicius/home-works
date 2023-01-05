const registerForm = document.querySelector("#register-form");

registerForm.addEventListener("submit", async (event) => {
  event.preventDefault();

  const emailInputValue = document.querySelector("#email-input").value.trim();
  const passwordInputValue = document
    .querySelector("#password-input")
    .value.trim();

  const user = JSON.stringify({
    email: emailInputValue,
    password: passwordInputValue,
  });

  try {
    const myHeaders = new Headers();
    myHeaders.append("Content-type", "application/json");

    const response = await fetch(
      "http://localhost:5000/v1/authorization/register",
      {
        method: "POST",
        headers: myHeaders,
        body: user,
      }
    );

    // if (response.ok) {
    //   document.body.querySelector("#register-form").reset();
    //   const data = await response.json();

    //   localStorage.setItem("token", data.token);

    //   window.location.assign(`./content.html`);
    // }

    if (response.status >= 400) {
      const message = await response.json();

      alert(message.error);
    }
  } catch (error) {
    alert(error.message);
  }
});