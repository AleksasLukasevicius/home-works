export class Order {
  name;
  orderId;
  orderedAt;
  completedAt;
  products; // ProductId[]
  totalPrice;

  constructor(name, orderId, initOrderedAt, completedAt, products, totalPrice) {
    this.name = name;
    this.orderId = orderId;
    this.orderedAt = orderedAt;
    this.completedAt = completedAt;
    this.products = products;
    this.totalPrice = totalPrice;
  }
}
