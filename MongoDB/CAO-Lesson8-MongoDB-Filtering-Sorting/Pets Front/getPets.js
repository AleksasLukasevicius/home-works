let orderSelection = "asc";
let petSelection = ["dog", "cat", "bunny"];

function showPets(data) {
  const table = document.querySelector("tbody");
  table.innerHTML = "";

  function getPets() {
    fetch(
      `http://localhost:5000/pets/${petSelection.join(",")}/${orderSelection}}`
    )
      .then((res) => res.json())
      .then((data) => showPets(data));
  }

  getPets();

  data.forEach((pet) => {
    const tableRowElement = document.createElement("tr");
    const tableNameElement = document.createElement("td");
    const tableTypeElement = document.createElement("td");
    const tableAgeElement = document.createElement("td");

    const { name, type, age } = pet;

    tableNameElement.textContent = name;
    tableTypeElement.textContent = type;
    tableAgeElement.textContent = age;

    tableRowElement.append(tableNameElement, tableTypeElement, tableAgeElement);
    table.append(tableRowElement);
  });
}

fetch("http://localhost:5000/pets")
  .then((res) => res.json())
  .then((data) => showPets(data));

document.querySelector("#age-sort").addEventListener("click", (event) => {
  const text = event.target.textContent;
  if (text.includes("Asc")) {
    event.target.textContent = text.replace("Asc", "Dsc");
    orderSelection = "dcs";
  } else {
    event.target.textContent = text.replace("Dsc", "Asc");
    orderSelection = "asc";
  }

  getPets();
});

document.querySelectorAll("button").forEach((button) =>
  button.addEventListener("click", (event) => {
    event.target.classList.toggle("selected");

    const petClicked = event.target.textContent.toLowerCase();

    if (petSelection.includes(petClicked)) {
      petSelection = petSelection.filter(
        (petStored) => petStored !== petClicked
      );
    } else {
      petSelection.push(petClicked);
    }
    getPets();
  })
);
