import { useEffect, useState } from "react";
import "./App.css";
import { ProductsContext } from "./componets/Products/ProductsContext";
import { Router } from "./componets/Router/Router";
import { TProduct } from "./componets/Types/TProduct";

export const App = () => {
  const [products, setProducts] = useState<TProduct[]>([
    { id: 1, name: "bread", price: 1.99 },
    { id: 2, name: "milk", price: 2.99 },
    { id: 3, name: "butter", price: 3.99 },
    { id: 4, name: "cheese", price: 4.99 },
  ]);

  // useEffect(() => {
  //   setProducts(products);
  // }, []);

  return (
    <div className="App">
      <ProductsContext.Provider value={products}>
        <Router />
      </ProductsContext.Provider>
    </div>
  );
};
