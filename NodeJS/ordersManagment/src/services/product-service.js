import { Product } from "../models/Product.js";

let products = [];

export const createProduct = ({ id, name, price, isAvailable, imageURL }) => {
  try {
    const product = new Product(id, name, price, isAvailable, imageURL);

    products.push(product);
  } catch (error) {
    return console.error(error);
  }
};

export const getProducts = () => {
  return products;
};
