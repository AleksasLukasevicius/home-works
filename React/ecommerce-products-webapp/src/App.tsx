import { useReducer } from "react";
import { ProductsContext, MainRouter, productsReducer } from "./components";

export const App = () => {
  const [state, dispatch] = useReducer(productsReducer, {
    fetchedProducts: [],
    cartProducts: [],
  });

  return (
    <ProductsContext.Provider value={{ ...state, dispatch }}>
      <MainRouter />
    </ProductsContext.Provider>
  );
};
