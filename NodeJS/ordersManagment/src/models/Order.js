import Joi from "joi";

const orderSchema = Joi.object({
  orderName: Joi.string().trim().required(),
  orderedAt: Joi.string().required(),
  completedAt: Joi.string(),
  products: Joi.array().required(),
  totalPrice: Joi.number().required(),
});

export class Order {
  orderId;
  orderName;
  orderedAt;
  completedAt;
  products; // ProductId[]
  totalPrice;

  constructor({
    orderId,
    orderName,
    orderedAt,
    completedAt,
    products,
    totalPrice,
  }) {
    const newOrdertData = {
      orderName,
      orderedAt,
      completedAt,
      products,
      totalPrice,
    };
    const orderValidationResult = orderSchema.validate(newOrdertData);

    if (orderValidationResult.error) {
      throw Error(orderValidationResult.error);
    }

    this.orderName = orderName;
    this.orderId = orderId;
    this.orderedAt = orderedAt;
    this.completedAt = completedAt;
    this.products = products;
    this.totalPrice = totalPrice;
  }
}
