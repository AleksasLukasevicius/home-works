import express from "express";
import dotenv from "dotenv";
import { createProduct, getProducts } from "./src/services/product-service.js";
import { ordersController } from "./src/controllers/orders-controller.js";

dotenv.config();

const app = express();
const PORT = +process.env.PORT || 5_000;

app.use(express.json());
app.use("/orders", ordersController);

app.listen(PORT, () => console.info(`Server is running on prt ${PORT}`));
