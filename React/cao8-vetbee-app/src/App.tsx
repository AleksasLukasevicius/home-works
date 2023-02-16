import { useEffect, useState } from "react";
import "./App.css";
import { Router } from "./coponents/Router/Router";
import { ProductsContext } from "./coponents/ProductsContext/ProductsContext";

export const App = () => {
  const [products, setProducts] = useState<string[]>([]);

  useEffect(() => {
    setProducts(["Apples"]);
  }, []);

  return (
    <div className="App">
      <ProductsContext.Provider value={products}>
        <Router />
      </ProductsContext.Provider>
    </div>
  );
};
