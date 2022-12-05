import { showPets } from "./showPets.js";

let orderSelection = "asc";
let petSelection = ["dog", "cat", "bunny"];

const getPets = async () => {
  try {
    const response = await fetch(
      `http://localhost:5000/pets/${petSelection.join(",")}/${orderSelection}`
    );
    const pets = await response.json();

    showPets(pets);
  } catch (error) {
    console.error(error);
  }
};

await getPets();

document.querySelector("#age-sort").addEventListener("click", async (event) => {
  const text = event.target.textContent;

  if (text.includes("Asc")) {
    event.target.textContent = text.replace("Asc", "Dsc");
    orderSelection = "dsc";
  } else {
    event.target.textContent = text.replace("Dsc", "Asc");
    orderSelection = "asc";
  }

  await getPets();
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
