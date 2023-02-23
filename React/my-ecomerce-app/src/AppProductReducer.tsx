import { Router } from "./componets/Router/Router";
import { useReducer } from "react";
import { INITIAL_PRODUCTS } from "./utils/initialProducts";

import "./App.css";
import {
  ProductsContext,
  productsReducer,
  INITIAL_VALUE,
} from "./componets/ProductsContext";

export const App = () => {
  const [state, dispatch] = useReducer(productsReducer, {
    products: INITIAL_VALUE.products,
    cartProducts: INITIAL_VALUE.cartProducts,
  });
  const products = INITIAL_PRODUCTS;

  return (
    <div className="App">
      <ProductsContext.Provider value={{ ...state, dispatch }}>
        <Router />
      </ProductsContext.Provider>
    </div>
  );
};
