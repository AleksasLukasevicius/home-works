import { ProductsContext } from "..";
import { type FC, useContext } from "react";
import type { TProductProps } from "./types";
import { ProductActionButon } from "./ProductActionButton";
import { Box } from "@mui/material";

// export const Product = ({ product }: TProductProps) => {
export const Product: FC<TProductProps> = ({ product }) => {
  const { cartProducts } = useContext(ProductsContext);

  const isProductInCart = cartProducts.some(
    //to do naudti objekta
    (cartProduct) => cartProduct.id === product.id
  );

  return (
    <div className="product-card">
      <h3>{product.title}</h3>
      <p>{product.description}</p>
      <p>Price: {product.price} €</p>

      <Box>
        <ProductActionButon
          title="+"
          type="addProduct"
          productId={product.id}
        />
        {isProductInCart ? (
          <ProductActionButon
            title="-"
            type="deleteProduct"
            productId={product.id}
          />
        ) : null}
      </Box>
    </div>
  );
};
