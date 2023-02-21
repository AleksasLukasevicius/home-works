import { useContext } from "react";
import { OrangeButton, WhiteButton } from "../Button/Button.styled";
import { CartProductsContext } from "../CartProductsContext/CartProductsContext";
import { ProductsContext } from "../ProductsContext/ProductsContext";

export const Cart = () => {
  const { cartProducts, setCartProducts } = useContext(CartProductsContext);
  const { products, setProducts } = useContext(ProductsContext);
  return (
    <main>
      <div className="title-wrapper">
        <h1>Cart Product List</h1>
      </div>

      <div className="products-container">
        {cartProducts.map((product, productIndex) => (
          <div className="product-card" key={`product.id- ${productIndex}`}>
            <p>Name: {product.name}</p>
            <p>Product amount: {product.amount}</p>

            <p>Price: {product.price} $</p>
            <div className="button-wrapper">
              <OrangeButton
              // onClick={() => handleAddToCart(product, productIndex)}
              >
                Add product
              </OrangeButton>
              <WhiteButton
              // onClick={() => handleAddToCart(product, productIndex)}
              >
                Remove product
              </WhiteButton>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
};
