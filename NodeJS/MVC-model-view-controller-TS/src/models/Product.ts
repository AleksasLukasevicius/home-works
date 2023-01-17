export class Product {
  price: number;
  title: string;
  isAvailable: boolean;

  constructor(price: number, title: string, isAvailable: boolean) {
    this.price = price;
    this.title = title;
    this.isAvailable = isAvailable;
  }
}
