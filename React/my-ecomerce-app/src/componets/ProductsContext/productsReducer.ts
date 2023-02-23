import { INITIAL_PRODUCTS } from "../../utils/initialProducts";
import type { TProductsContext, TProductState } from "./types";

export const productsReducer = (state: TProductState, action: any) => {
  // const newState = { ...state };
  switch (action.type) {
    case "SET_PRODUCTS":
      const products = INITIAL_PRODUCTS;
      return {
        ...state,
        products,
      } as TProductState;
    case "ADD_CART_PRODUCT":
      return {
        ...state,
        products: state.products,
        cartProducts: [{}],
      } as TProductState;
    default:
      return { ...state, products: [{}] } as TProductState;
  }
};
