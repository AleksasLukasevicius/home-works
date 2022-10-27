import { getProducts } from "./getProducts.js";

const rendreProducts = (products) => {
    products.forEach((product) => {

        const { image, id, price, title } = product;

        const productConainer = document.createElement("div");
        const titleElement = document.createElement("h3");
        const priceElement = document.createElement("h5");
        const imgElement = document.createElement("img");

        productConainer.id = `product-${id}`;

        titleElement.innerText = title;
        priceElement.innerText = price;
        imgElement.src = image;

        productConainer.append(imgElement, titleElement, priceElement);
        document.body.append(productConainer);
    });

};

export { rendreProducts }