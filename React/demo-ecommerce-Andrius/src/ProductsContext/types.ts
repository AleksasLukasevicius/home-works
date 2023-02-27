import type { Dispatch } from "react";
import type { TCartProduct } from "../types/TCartProduct";
import type { TProduct } from "../types/TProduct";

export type TProductsContext = TProductState & {
  dispatch: Dispatch<TProductsAction>;
};

export type TProductState = {
  products: TProduct[];
  cartProducts: TCartProduct[];
};

export type TProductsAction = {
  type: "setProducts" | "addProductToCart";
  payload: {
    fetchedProducts?: TProduct[];
    productId?: number;
  };
};
