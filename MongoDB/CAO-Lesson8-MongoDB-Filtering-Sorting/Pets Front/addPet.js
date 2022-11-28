document.body.querySelector("#pet-form").addEventListener("submit", (event) => {
  event.preventDefault();

  const name = document.querySelector("#pet-name").value.trim();
  const age = +document.querySelector("#pet-age").value;
  const type = document.querySelector("#pet-type").value;

  fetch("http://localhost:5000/pet", {
    method: "POST",
    headers: { "Content-Type": "application/json; charset=UTF-8" },
    body: JSON.stringify({ name, age, type }),
  })
    .then((res) => res.json())
    .then((data) => console.info(data));
});
