import type { TProductsAction, TProductsState } from "./types";

export const productsReducer = (
  state: TProductsState,
  action: TProductsAction
) => {
  switch (action.type) {
    case "addProduct":
      console.log("Add product");
      break;

    case "deleteProduct":
      console.log("Delete product");
      break;

    case "setProducts":
      console.log("Set products");
      break;

    default:
      console.log("No case matched");
  }
  return state;
};
