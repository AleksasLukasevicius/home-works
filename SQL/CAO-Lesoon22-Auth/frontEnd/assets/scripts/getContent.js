const getContent = async () => {
  try {
    const accesToken = localStorage.getItem("token");
    const response = await fetch("http://localhost:5000/v1/content", {
      headers: { authorization: `Bearer ${accesToken}` },
    });

    if (response.ok) {
      const data = await response.json();
      const output = document.body.querySelector("#output");
      output.textContent = data.message;
    }

    if (response.status >= 400) {
      const message = await response.json();

      alert(message.error);
    }
  } catch (error) {
    alert(error.message);
  }
};

await getContent();
