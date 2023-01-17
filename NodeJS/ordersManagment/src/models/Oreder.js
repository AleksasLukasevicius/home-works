export class Order {
  name;
  id;
  orderedAt;
  completedAt;
  products; // ProductId[]
  totalPrice;

  constructor(
    initName,
    initId,
    initOrderedAt,
    initCompletedAt,
    initProducts,
    initTotalPrice
  ) {
    this.name = initName;
    this.orderId = initId;
    this.orderedAt = initOrderedAt;
    this.completedAt = initCompletedAt;
    this.products = initProducts;
    this.totalPrice = initTotalPrice;
  }
}
