import { useContext } from "react";
import { ProductCard } from "./ProductCard";
import { ProductsContext } from "./ProductsContext";

export const Products = () => {
  const products = [useContext(ProductsContext)];
  console.info({ products });

  // useEffect(() => {
  //   setProducts([
  //     { name: "bread", price: 1.99 },
  //     { name: "milk", price: 2.99 },
  //     { name: "butter", price: 3.99 },
  //     { name: "cheese", price: 4.99 },
  //   ]);
  // }, []);

  return (
    <main>
      <div className="title-wrapper">
        <h1>Product List</h1>
      </div>

      <div className="products-container">
        {products.map((product: any) => (
          <ProductCard product={product} />
        ))}
      </div>
    </main>
  );
};
