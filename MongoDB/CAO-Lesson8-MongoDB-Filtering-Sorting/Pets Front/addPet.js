document.body
  .querySelector("#pet-form")
  .addEventListener("submit", async (event) => {
    event.preventDefault();

    const name = document.querySelector("#pet-name").value.trim();
    const age = +document.querySelector("#pet-age").value;
    const type = document.querySelector("#pet-type").value;

    try {
      const request = await fetch("http://localhost:5000/pet", {
        method: "POST",
        headers: { "Content-Type": "application/json; charset=UTF-8" },
        body: JSON.stringify({ name, age, type }),
      });
      return request;
    } catch (error) {
      alert(error);
    }
  });
