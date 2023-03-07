import { useReducer } from "react";
import { ProductsContext, MainRouter, productsReducer } from "./components";
import { Fade } from "@mui/material";

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
