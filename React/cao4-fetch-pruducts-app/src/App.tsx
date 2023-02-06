import React, { useEffect, useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import { Products } from "./components/Products/Products";
import { PostProduct } from "./components/Products/PostProduct";

function App() {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const fetchProducts = () => {
    fetch("https://golden-whispering-show.glitch.me")
      .then((response) => response.json())
      .then((data) => setProducts(data))
      .catch((error) => {
        console.error(error.message);
      })
      .finally(() => {
        setTimeout(() => {
          setIsLoading(false);
        }, 1000);
      });
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>

      <h2>Products list</h2>
      <Products
        products={products}
        isLoading={isLoading}
        fetchProducts={fetchProducts}
        setProducts={setProducts}
      />

      <h2>Add product</h2>
      <PostProduct fetchProducts={fetchProducts} />
    </div>
  );
}

export default App;
