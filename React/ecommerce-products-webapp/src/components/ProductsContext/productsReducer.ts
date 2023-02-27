import { TProductsAction, TProductsState } from "./types";

export const productsReducer = (
  state: TProductsState,
  action: TProductsAction
) => {
  switch (action.type) {
    case "addProduct":
      return console.log("addProduct");
    case "deleteProduct":
      return console.log("deleteProduct");
    case "setProducts":
      return console.log("setProducts");
    default:
      return state;
  }
};
