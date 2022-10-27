import { getProducts } from "./getProducts.js";
import { rendreProducts } from "./renderProducts.js";

let products = await getProducts();

const onProductDelete = (deletedId) => {
    products.filter(product => product.id != deletedId);

    rendreProducts(products);
}

rendreProducts(products);

export { onProductDelete };