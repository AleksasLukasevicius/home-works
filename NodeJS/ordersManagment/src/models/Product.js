import Joi from "joi";

const productSchema = Joi.object({
  id: Joi.number(),
  name: Joi.string().trim().required(),
  price: Joi.number().required(),
  isAvailable: Joi.boolean().required(),
  imageURL: Joi.string().trim().lowercase().required(),
});

export class Product {
  id;
  name;
  price;
  isAvailable;
  imageURL;

  constructor({ id, name, price, isAvailable, imageURL }) {
    const newProductData = { id, name, price, isAvailable, imageURL };
    const productValidationResult = productSchema.validate(newProductData);

    if (productValidationResult.error) {
      throw Error(productValidationResult.error);
    }

    this.id = id;
    this.name = name;
    this.price = price;
    this.isAvailable = isAvailable;
    this.imageURL = imageURL;
  }
}
