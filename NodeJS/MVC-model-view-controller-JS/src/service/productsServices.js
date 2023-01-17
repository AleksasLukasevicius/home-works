import { Product } from "../models/Product.js";

const products = [
  new Product("Book", 15, true),
  new Product("OldBook", 55, false),
  new Product("NewBook", 5, true),
];

export const getProducts = (_, res) => {
  res.status(200).send({ products }).end();
};

export const createProduct = (req, res) => {
  const title = req.body.title?.trim();
  const price = +req.body?.price;
  const isAvailable = req.body?.isAvailable;

  if (!price || !title) {
    return res.status(400).send({ error: "Inccorect data" }).end();
  }

  const newProduct = new Product(title, price, isAvailable);

  products.push(newProduct);

  res
    .status(201)
    .send({ message: `Product ${title} has been created` })
    .end();
};
