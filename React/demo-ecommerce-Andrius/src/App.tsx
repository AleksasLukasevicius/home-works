import { useReducer } from "react";
import {
  INITIAL_VALUE,
  ProductsContext,
  productsReducer,
} from "./ProductsContext";
import "./App.css";
import { MainRouter } from "./components/MainRouter/MainRouter";

export const App = () => {
  const [state, dispatch] = useReducer(productsReducer, {
    products: INITIAL_VALUE.products,
    cartProducts: INITIAL_VALUE.cartProducts,
  });

  return (
    <div className="App">
      <ProductsContext.Provider value={{ ...state, dispatch }}>
        <MainRouter />
      </ProductsContext.Provider>
    </div>
  );
};
