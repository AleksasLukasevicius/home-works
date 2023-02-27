import { useContext, useEffect, useState } from "react";
import { ProductsContext } from "../../ProductsContext/ProductsContext";
import { ProductsContainer } from "../../styles/ProductsContainer";
import { getProducts } from "../../utils/getProducts";
import { Product } from "./Product";
import type { TProduct } from "../../types";

export const Products = () => {
  const [isLoading, setIsLoading] = useState(true);
  const { products, cartProducts, dispatch } = useContext(ProductsContext);

  const handleBuyClick = (productId: TProduct["id"]) => {
    dispatch({
      type: "addProductToCart",
      payload: { productId },
    });
  };

  useEffect(() => {
    if (!products.length) {
      getProducts().then((fetchedProducts) => {
        dispatch({ type: "setProducts", payload: { fetchedProducts } });

        setIsLoading(false);
      });
    }
  }, [dispatch, products.length]);

  if (isLoading) {
    return <p>Loading...</p>;
  }

  return (
    <ProductsContainer>
      {products.map((product) => {
        const isProductInCart = cartProducts.some(
          (cartProduct) => cartProduct.id === product.id
        );

        return (
          <Product
            key={product.id}
            product={product}
            isProductInCart={isProductInCart}
            handleBuyClick={handleBuyClick}
          />
        );
      })}
    </ProductsContainer>
  );
};
