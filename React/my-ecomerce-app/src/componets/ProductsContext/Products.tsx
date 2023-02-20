import { useContext } from "react";
import type { TProduct } from "../types/TProduct";
import { ProductCard } from "./ProductCard";
import { ProductsContext } from "./ProductsContext";

export const Products = () => {
  const { products, setProducts } = useContext(ProductsContext);
  // const { cartProducts, setCartProducts } = useContext(CartProductsContext);

  const handleAddToCart = (product: TProduct, productIndex: number) => {
    const modifyProducts = [...products];

    modifyProducts[productIndex] = {
      ...product,
      amount: product.amount + 1,
    };
    // modifyProducts[productIndex] = {
    //   ...modifyProducts[productIndex],
    //   amount: modifyProducts[productIndex].amount + 1,
    // };

    const newPrducts = products.map((curProduct) => {
      const isSelectProduct = curProduct.id === product.id;

      return {
        ...curProduct,
        amount: isSelectProduct ? curProduct.amount + 1 : curProduct.amount,
      };
    });
    setProducts(modifyProducts);
  };

  return (
    <main>
      <div className="title-wrapper">
        <h1>Product List</h1>
      </div>

      <div className="products-container">
        {products.map((product, productIndex) => (
          <div className="product-card" key={`product.id- ${productIndex}`}>
            <p>Name: {product.name}</p>
            <p>Price: {product.price} $</p>
            <button
              type="submit"
              onClick={() => handleAddToCart(product, productIndex)}
            >
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </main>
  );
};
