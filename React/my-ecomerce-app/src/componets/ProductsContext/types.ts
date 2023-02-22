import { TProduct } from "../../types/TProduct";

export type TProductsContext = {
  products: TProduct[];
  setProducts: React.Dispatch<React.SetStateAction<TProduct[]>>;
};

export type TCartProductsContext = {
  cartProducts: TProduct[];
  setCartProducts: React.Dispatch<React.SetStateAction<TProduct[]>>;
};
