import { showPets } from "./showPets.js";

let petSelection = ["dog", "cat", "bunny"];

const getPets = async (orderBy) => {
  try {
    const response = await fetch(
      `http://localhost:5000/pets?types=${petSelection.join(
        ","
      )}&order=${orderBy}`
    );
    const pets = await response.json();

    showPets(pets);
  } catch (error) {
    console.error(error);
  }
};

await getPets();

document.querySelector("#age-sort").addEventListener("click", async (event) => {
  let orderBy = "";
  const text = event.target.textContent;

  if (text.includes("Asc")) {
    event.target.textContent = text.replace("Asc", "Dsc");
    orderBy = "dsc";
  } else {
    event.target.textContent = text.replace("Dsc", "Asc");
    orderBy = "asc";
  }

  await getPets(orderBy);
});

document.querySelectorAll("button").forEach((button) =>
  button.addEventListener("click", async (event) => {
    event.target.classList.toggle("selected");

    const petClicked = event.target.textContent.toLowerCase();

    if (petSelection.includes(petClicked)) {
      petSelection = petSelection.filter(
        (petStored) => petStored !== petClicked
      );
    } else {
      petSelection.push(petClicked);
    }
    await getPets();
  })
);
