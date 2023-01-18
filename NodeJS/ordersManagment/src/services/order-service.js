import { Order } from "../models/Order.js";

let orders = [];

export const createOrder = ({
  orderName,
  orderId,
  orderedAt,
  completedAt,
  products,
  totalPrice,
}) => {
  try {
    const order = new Order({
      orderName,
      orderedAt,
      completedAt,
      products,
      totalPrice,
      orderId,
    });

    if (order) {
      orders.push(order);

      return { order };
    }
  } catch (error) {
    // console.error(error);

    return { error };
  }
};

export const getOrders = () => {
  return orders;
};
