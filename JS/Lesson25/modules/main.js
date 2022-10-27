import { getProducts } from "./getProducts.js";
import { rendreProducts } from "./renderProducts.js";

const products = await getProducts();

rendreProducts(products);

const deleteButton = document.querySelector("#delete-button");

const deleteProduct = async () => {
    try {
        const response = await fetch("https://golden-whispering-show.glitch.me/2", {
            method: "DELETE",
        });
    } catch (error) {
        console.error(error);

    }
};