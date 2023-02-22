import { Router } from "./componets/Router/Router";
import { useState } from "react";
import { INITIAL_PRODUCTS } from "./utils/initialProducts";
import { TProduct } from "./types/TProduct";
import { ProductsContext } from "./componets/ProductsContext/ProductsContext";
import { CartProductsContext } from "./componets/CartProductsContext/CartProductsContext";
import "./App.css";
import { TCartProduct } from "./types/TCartProduct";

export const App = () => {
  const [products, setProducts] = useState<TProduct[]>(INITIAL_PRODUCTS);
  const [cartProducts, setCartProducts] = useState<TCartProduct[]>([]);

  return (
    <div className="App">
      <ProductsContext.Provider value={{ products, setProducts }}>
        <CartProductsContext.Provider value={{ cartProducts, setCartProducts }}>
          <Router />
        </CartProductsContext.Provider>
      </ProductsContext.Provider>
    </div>
  );
};
