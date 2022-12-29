import { getCars } from "./getCars.js";

const renderCars = async () => {
  const cars = await getCars();

  const sectionContainer = document.body.querySelector("#cars");
  sectionContainer.replaceChildren();

  if (cars.length === 0) {
    const noDataElement = document.createElement("h2");
    noDataElement.textContent = "No data in database";

    sectionContainer.append(noDataElement);
  }

  cars.forEach((car) => {
    const { id, title, image, price, numberplates } = car;

    const carContainer = document.createElement("div");
    carContainer.className = "carContainer";

    const carTitleContainer = document.createElement("div");
    carTitleContainer.className = "carTitleContainer";

    const numberplatesElement = document.createElement("h2");
    const carModelElement = document.createElement("p");

    numberplatesElement.textContent = `${numberplates.slice(
      0,
      3
    )} ${numberplates.slice(3)}`;
    carModelElement.textContent = title;

    // const priceElement = document.createElement("h4");
    // priceElement.textContent = `${price} €`;

    const carImageContainer = document.createElement("div");
    carImageContainer.className = "carImageContainer";

    const carImageElement = document.createElement("img");
    carImageElement.src = image;
    carImageElement.alt = `${title}`;

    const deleteCarContainer = document.createElement("div");
    deleteCarContainer.className = "deleteCarContainer";

    const deleteCarButton = document.createElement("button");
    deleteCarButton.id = id;
    deleteCarButton.className = "delete-button";
    deleteCarButton.textContent = "DELETE";

    carTitleContainer.append(
      numberplatesElement,
      carModelElement
      // priceElement
    );
    carImageContainer.append(carImageElement);
    deleteCarContainer.append(deleteCarButton);

    carContainer.append(
      carTitleContainer,
      carImageContainer,
      deleteCarContainer
    );

    sectionContainer.append(carContainer);

    const deleteCar = async () => {
      try {
        const response = await fetch(
          `http://localhost:5000/cars/${deleteCarButton.id}`,
          {
            method: "DELETE",
          }
        );

        const isPostDeleted = response.ok;

        if (isPostDeleted) {
          alert("Car deleted succesfully");
          //   await getCars();
          window.location.reload();
        }
      } catch (error) {
        console.log(error);
      }
    };

    deleteCarButton.addEventListener("click", deleteCar);
  });
};

await renderCars();

export { renderCars };
