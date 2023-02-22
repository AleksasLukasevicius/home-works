import { TProduct } from "../../types/TProduct";
import { TCartProduct } from "../../types/TCartProduct";
import { Dispatch, SetStateAction } from "react";

export type TProductsContext = {
  products: TProduct[];
  setProducts: Dispatch<SetStateAction<TProduct[]>>;
};

export type TCartProductsContext = {
  cartProducts: TCartProduct[];
  setCartProducts: Dispatch<SetStateAction<TCartProduct[]>>;
};
