import { TProduct } from "../../types/TProduct";

export const ProductCard = (product: TProduct) => {
  return (
    <div className="product-card" key={product.id}>
      <p>Id: {product.id}</p>
      <p>Name: {product.name}</p>
      <p>Price: {product.price}</p>
    </div>
  );
};
