import express from "express";
import { createOrder, getOrders } from "../services/order-service.js";

export const ordersController = express.Router();

// let orders = [];

ordersController.get("/", (_, res) => {
  const orders = getOrders();

  res.send({ orders }).end();
});

ordersController.post("/", (req, res) => {
  const { orderName, orderedAt, completedAt, products, totalPrice } = req.body;

  const { order, error } = createOrder({
    orderName,
    orderedAt,
    completedAt,
    products,
    totalPrice,
  });

  console.info({ order });

  if (!order || error) {
    return res.status(400).send({ error: error.message }).end();
  }

  res.send({ message: `Order ${orderName} was created.` }).end();
});
