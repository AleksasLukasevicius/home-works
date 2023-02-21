import { createContext } from "react";
import type { TCartProductsContext } from "../ProductsContext/types";

export const CartProductsContext = createContext<TCartProductsContext>({
  cartProducts: [],
  setCartProducts: () => {},
});
