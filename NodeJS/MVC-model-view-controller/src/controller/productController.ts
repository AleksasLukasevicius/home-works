import { Router } from "express";
import { createProduct, getProducts } from "../services/productsServices";

export const router = Router();

router.get("/", getProducts);

router.post("/", createProduct);
