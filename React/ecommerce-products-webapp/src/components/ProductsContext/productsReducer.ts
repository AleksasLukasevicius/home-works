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

      const cartProductIndex = state.cartProducts.findIndex(
        (product) => product.id === action.payload.productId
      );

      if (cartProductIndex !== -1) {
        const newCartProducts = { ...state.cartProducts };

        newCartProducts[cartProductIndex].amount++;

        return { ...state, cartProducts: [...state.cartProducts] };
      }

      return {
        ...state,
        cartProducts: [...state.cartProducts, { ...productToAdd, amount: 1 }],
      };

    case "deleteProduct": {
      const productToDelete = state.cartProducts.find(
        (product) => product.id === action.payload.productId
      );

      if (!productToDelete) {
        return state;
      }

      // const newCartProducts = { ...state.cartProducts };

      // newCartProducts[cartProductIndex].amount++;

      // return { ...state, cartProducts: [...state.cartProducts] };

      const newCartProducts = [...state.cartProducts].filter((cartProduct) => {
        if (cartProduct.id === action.payload.productId) {
          cartProduct.amount--;
          return cartProduct.amount > 0;
        }

        return true;
      });

      return {
        ...state,
        cartProducts: newCartProducts,
      };
    }
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
