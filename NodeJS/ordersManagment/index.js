import express from "express";
import dotenv from "dotenv";
import { Product } from "./src/models/Product.js";
import { createProduct, getProducts } from "./src/services/product-service.js";

dotenv.config();

const app = express();
const PORT = +process.env.PORT || 5_000;

app.use(express.json());

console.info(getProducts());

createProduct({
  id: 1,
  name: "Phone",
  price: 150,
  isAvailable: true,
  imageURL:
    "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/dog-puppy-on-garden-royalty-free-image-1586966191.jpg?crop=0.752xw:1.00xh;0.175xw,0&resize=1200:*",
});

console.info(getProducts());

app.listen(PORT, () => console.info(`Server is running on prt ${PORT}`));
