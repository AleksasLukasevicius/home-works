import { Product } from "../models/Product.js";

let products = [];

export const createProduct = ({ name, price, isAvailable, imageURL }) => {
  try {
    const product = new Product(name, price, isAvailable, imageURL);

    console.info(product.price);

    products.push(product);
  } catch (error) {
    return console.error(error);
  }
};

export const getProducts = () => {
  return products;
};
