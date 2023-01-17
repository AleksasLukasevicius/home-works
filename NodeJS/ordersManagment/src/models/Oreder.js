export class Order {
  orderName;
  orderId;
  orderedAt;
  completedAt;
  products; // ProductId[]
  totalPrice;

  constructor(
    orderName,
    orderId,
    orderedAt,
    completedAt,
    products,
    totalPrice
  ) {
    this.orderName = orderName;
    this.orderId = orderId;
    this.orderedAt = orderedAt;
    this.completedAt = completedAt;
    this.products = products;
    this.totalPrice = totalPrice;
  }
}
