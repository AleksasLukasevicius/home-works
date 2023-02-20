import { useState } from "react";
import "./App.css";
import { ProductsContext } from "./componets/ProductsContext/ProductsContext";
import { Router } from "./componets/Router/Router";
import { INITIAL_PRODUCTS } from "./componets/utils/initialProducts";

export const App = () => {
  const [products, setProducts] = useState(INITIAL_PRODUCTS);

  return (
    <div className="App">
      <ProductsContext.Provider value={{ products, setProducts }}>
        <Router />
      </ProductsContext.Provider>
    </div>
  );
};
