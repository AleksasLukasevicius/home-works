import type { TCartProduct } from "../types";
import type { TProductsAction, TProductState } from "./types";

export const productsReducer = (
  state: TProductState,
  action: TProductsAction
): TProductState => {
  switch (action.type) {
    case "setProducts": {
      if (Array.isArray(action.payload.fetchedProducts)) {
        return { ...state, products: action.payload.fetchedProducts };
      }
      return state;
    }

    case "addProductToCart": {
      const modifiedCartProducts = [...state.cartProducts];
      const cartProduct = modifiedCartProducts.find(
        (modifiedCartProduct) =>
          modifiedCartProduct.id === action.payload.productId
      );

      if (cartProduct) {
        cartProduct.amount++;
      } else {
        const newCartProduct = state.products.find(
          (product) => product.id === action.payload.productId
        ) as TCartProduct;

        console.info({ newCartProduct });
        modifiedCartProducts.push({ ...newCartProduct, amount: 1 });
      }

      return {
        ...state,
        cartProducts: modifiedCartProducts,
      };
    }
    default:
      return state;
  }
};
