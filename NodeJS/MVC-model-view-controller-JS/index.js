import express from "express";
import { router } from "./src/controllers/productControllers.js";

const app = express();
const PORT = 5_000;

app.use(express.json());

app.use("/products", router);

app.listen(PORT, () => console.info(`Server is running on ${PORT} port`));
