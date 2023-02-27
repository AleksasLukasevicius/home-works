import { useReducer } from "react";
import { ProductsContext } from "./components";
import { MainRouter } from "./components/MainRouter";
import { productsReducer } from "./components/ProductsContext/productsReducer";
import { TProductsState } from "./components/ProductsContext/types";

export const App = () => {
  const [state, dispatch] = useReducer(productsReducer, {
    fetchedProducts: [],
    cartProducts: [],
  } as TProductsState);
  return (
    <div>
      <ProductsContext.Provider value={{ ...state, dispatch }}>
        <MainRouter />
      </ProductsContext.Provider>
    </div>
  );
};
