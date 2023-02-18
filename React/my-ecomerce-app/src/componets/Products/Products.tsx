import { useContext } from "react";
import { TProduct } from "../Types/TProduct";
import { ProductCard } from "./ProductCard";
import { ProductsContext } from "./ProductsContext";

export const Products = () => {
  const products = [useContext(ProductsContext)];
  console.info(products);

  return (
    <main>
      <div className="title-wrapper">
        <h1>Product List</h1>
      </div>

      <div className="products-container">
        {products.map((product: TProduct) => (
          <ProductCard products={products} />
        ))}
      </div>
    </main>
  );
};
