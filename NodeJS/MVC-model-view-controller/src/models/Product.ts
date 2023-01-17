export class Product {
  price: any;
  title: any;
  isAvailable: any;

  constructor(price: number, title: string, isAvailable: boolean) {
    this.price = price;
    this.title = title;
    this.isAvailable = isAvailable;
  }
}
