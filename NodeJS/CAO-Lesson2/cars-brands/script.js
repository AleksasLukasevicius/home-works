const carList = async () => {
  const cars = await getCars();
  const carsListElement = document.createElement("ul");

  cars.forEach((car) => {
    const carElement = document.createElement("li");
    carElement.textContent = car;
    carsListElement.append(carElement);
  });

  document.body.append(carsListElement);
};

const getCars = async () => {
  try {
    const response = await fetch("http://localhost:5000");
    const cars = await response.json();

    return cars;
  } catch (error) {
    console.error(error);
  }
};

carList();
