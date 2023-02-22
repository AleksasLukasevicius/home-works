import { TProduct } from "../../types/TProduct";

export const ProductCard = (product: TProduct) => {
  return (
    <div>
      <p>Name: {product.name}</p>
      <p>Price: {product.price} €</p>
    </div>
  );
};
