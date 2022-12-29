const getCars = async () => {
  try {
    const response = await fetch("http://localhost:5000/cars/");
    const cars = await response.json();

    if (!response.status >= 400) {
      const msg = await response.json();

      alert(msg.error);
    }

    return cars;
  } catch (error) {
    console.log(error);

    if (error.message === "Failed to fetch") {
      const sectionContainer = document.body.querySelector("#cars");
      sectionContainer.replaceChildren();

      const noConnnectionELement = document.createElement("h2");
      noConnnectionELement.textContent = "No connection with server!";

      sectionContainer.append(noConnnectionELement);
    }

    throw Error(error);
  }
};

export { getCars };
