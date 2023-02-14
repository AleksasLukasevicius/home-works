import { useEffect, useState } from "react";
import "./App.css";
import { Navigation } from "./coponents/Navigation/Navigation";
import { ProductsContext } from "./coponents/ProductsContext/ProductsContext";

export const App = () => {
  const [products, setProducts] = useState<string[]>([]);

  useEffect(() => {
    setProducts(["Apples"]);
  }, []);

  return (
    <div className="App">
      <ProductsContext.Provider value={products}>
        <Navigation />
      </ProductsContext.Provider>
    </div>
  );
};
