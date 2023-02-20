import { createContext } from "react";
import type { TProductsContext } from "./types";

export const ProductsContext = createContext<TProductsContext>({
  products: [],
  setProducts: () => {},
});
