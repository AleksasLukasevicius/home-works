import Joi from "joi";

const productSchema = Joi.object({
  name: Joi.string().trim().required(),
  price: Joi.number().required(),
  isAvailable: Joi.boolean(),
  imageURL: Joi.string().trim().lowercase().required(),
  id: Joi.number(),
});

export class Product {
  name;
  price;
  isAvailable;
  imageURL;
  id;

  constructor(name, price, isAvailable, imageURL, id) {
    const newProductData = { name, price, isAvailable, imageURL, id };

    const productValidationResult = productSchema.validate(newProductData);

    if (productValidationResult.error) {
      throw Error(productValidationResult.error);
    }

    console.info(productValidationResult);

    this.name = name;
    this.price = price;
    this.isAvailable = isAvailable;
    this.imageURL = imageURL;
    this.id = id;
  }
}
