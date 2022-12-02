const showPets = (pets) => {
  const table = document.querySelector("tbody");
  table.innerHTML = "";

  pets.forEach((pet) => {
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
};

export { showPets };
