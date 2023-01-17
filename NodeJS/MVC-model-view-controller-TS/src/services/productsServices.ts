import { Product } from "../models/Product";

const products = [
  new Product(13.3, "book", true),
  new Product(1330, "car", false),
  new Product(1.3, "pen", true),
];

export const getProducts = (_, res) => {
  res.send({ products }).end();
};

export const createProduct = (req, res) => {
  const price = +req.body?.price;
  const title = req.body.title?.trim();
  const isAvailable = req.body.isAvailable;

  if (!price || !title) {
    return res.status(400).send({ error: "Inccorect data" }).end();
  }

  const newProduct = new Product(price, title, isAvailable);

  products.push(newProduct);

  res
    .status(201)
    .send({ message: `Product ${title} has been created` })
    .end();
};
