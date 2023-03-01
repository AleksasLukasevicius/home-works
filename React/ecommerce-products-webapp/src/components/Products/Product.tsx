import { ProductsContext } from "..";
import { type FC, useContext } from "react";
import type { TProductProps } from "./types";
import Button from "@mui/material/Button";

// export const Product = ({ product }: TProductProps) => {
export const Product: FC<TProductProps> = ({ product }) => {
  const { dispatch } = useContext(ProductsContext);

  return (
    <div className="product-conatiner">
      <h3>{product.title}</h3>
      <p>{product.description}</p>
      <p>{product.price}</p>

      <Button
        variant="outlined"
        // size="small"
        onClick={() =>
          dispatch({ type: "addProduct", payload: { productId: product.id } })
        }
      >
        Add to cart
      </Button>
    </div>
  );
};
