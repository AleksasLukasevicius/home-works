import { Router } from "express";
import { createProduct, getProducts } from "../service/productsServices.js";

export const router = Router();

router.get("/", getProducts);

router.post("/", createProduct);
