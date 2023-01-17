export class Product {
  title;
  price;
  isAvailable;

  constructor(initTitle, initPrice, initIsAvailable) {
    (this.title = initTitle),
      (this.price = initPrice),
      (this.isAvailable = initIsAvailable);
  }
}
