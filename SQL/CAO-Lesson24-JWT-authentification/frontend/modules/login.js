const loginForm = document.querySelector("#login-form");

loginForm.addEventListener("submit", async (e) => {
  e.preventDefault();

  const emailInputValue = document.querySelector("#email-input").value.trim();
  const pswInputValue = document.querySelector("#password-input").value.trim();

  try {
    const response = await fetch("http://localhost:5000/v1/auth/login", {
      method: "POST",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify({
        email: emailInputValue,
        password: pswInputValue,
      }),
    });

    const userData = await response.json();

    if (response.ok) {
      loginForm.reset();

      localStorage.setItem("token", userData.token);

      alert("Successfully logged in");

      window.location.assign(`./index.html`);
    }

    if (!response.ok || response.status >= 400) {
      return alert(userData?.error || userData.statusText);
    }
  } catch (error) {
    alert(error.message);
  }
});
