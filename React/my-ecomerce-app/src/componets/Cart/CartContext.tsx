import { createContext } from "react";
import { TCartProductsContext } from "../ProductsContext/types";

export const CartContext = createContext<TCartProductsContext>({
  cartproducts: [],
  setCartProducts: () => {},
});
