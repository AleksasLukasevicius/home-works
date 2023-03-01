import type { TProductsAction, TProductsState } from "./types";

export const productsReducer = (
  state: TProductsState,
  action: TProductsAction
) => {
  switch (action.type) {
    case "addProduct":
      const productToAdd = state.fetchedProducts.find(
        (product) => product.id === action.payload.productId
      );

      if (!productToAdd) {
        return state;
      }

      const cartProduct = state.cartProducts.find(
        (product) => product.id === action.payload.productId
      );

      if (cartProduct) {
        cartProduct.amount++;
        return { ...state, cartProducts: [...state.cartProducts] };
      }

      return {
        ...state,
        cartProducts: [...state.cartProducts, { ...productToAdd, amount: 1 }],
      };

    case "deleteProduct":
      {
        console.log("Delete product");
      }
      break;

    case "setProducts":
      const { fetchedProducts } = action.payload;

      if (Array.isArray(fetchedProducts)) {
        return { ...state, fetchedProducts };
      }

      return state;

    default:
      console.log("No case matched");
  }
  return state;
};
