import { onDeleteClick } from "./onDeleteClick.js";

const rendreProducts = (products) => {
    const productsContainerElement = document.querySelector("#products-container");

    productsContainerElement.replaceChildren();

    products.forEach((product) => {
        const { image, id, price, title } = product;

        const productConainer = document.createElement("div");
        const deleteButton = document.createElement("button");
        const titleElement = document.createElement("h3");
        const priceElement = document.createElement("h5");
        const imgElement = document.createElement("img");


        productConainer.id = `product-${id}`;

        deleteButton.innerText = "Ištrinti";
        deleteButton.addEventListener("click", () => onDeleteClick(id));

        titleElement.innerText = title;
        priceElement.innerText = price;
        imgElement.src = image;

        productConainer.append(imgElement, titleElement, priceElement, deleteButton);
        productsContainerElement.append(productConainer);
    });

};

export { rendreProducts }