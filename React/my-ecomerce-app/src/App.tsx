import { useEffect, useState } from "react";
import "./App.css";
import { ProductsContext } from "./componets/Products/ProductsContext";
import { Router } from "./componets/Router/Router";

export const App = () => {
  const [products, setProducts] = useState<any[]>([]);

  useEffect(() => {
    setProducts([
      { name: "bread", price: 1.99 },
      { name: "milk", price: 2.99 },
      { name: "butter", price: 3.99 },
      { name: "cheese", price: 4.99 },
    ]);
  }, []);

  return (
    <div className="App">
      <ProductsContext.Provider value={products}>
        <Router />
      </ProductsContext.Provider>
    </div>
  );
};
