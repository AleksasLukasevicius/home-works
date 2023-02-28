import { ProductsContext } from "../ProductsContext/ProductsContext";
import { type FC, useContext } from "react";
import type { TProductProps } from "./types";

// export const Product = ({ product }: TProductProps) => {
export const Product: FC<TProductProps> = ({ product }) => {
  const { dispatch } = useContext(ProductsContext);

  return (
    <div className="product-conatiner">
      <p>{product.title}</p>
      <p>{product.description}</p>
      <p>{product.price}</p>

      <button
        onClick={() =>
          dispatch({ type: "addProduct", payload: { productId: product.id } })
        }
      >
        Add to cart
      </button>
    </div>
  );
};
