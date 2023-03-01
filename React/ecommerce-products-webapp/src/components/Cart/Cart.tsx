import { useContext } from "react";
import { ProductsContext } from "../ProductsContext";

export const Cart = () => {
  const { fetchedProducts, cartProducts, dispatch } =
    useContext(ProductsContext);
  return (
    <main>
      <h1>Cart products</h1>
    </main>
  );
};
