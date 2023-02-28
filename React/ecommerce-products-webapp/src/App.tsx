import { useReducer } from "react";
import { ProductsContext, MainRouter } from "./components";
import { productsReducer } from "./components/ProductsContext/productsReducer";

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
