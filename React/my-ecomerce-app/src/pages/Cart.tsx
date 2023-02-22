import { useContext } from "react";
import { OrangeButton, WhiteButton } from "../componets/Button/Button.styled";
import { CartProductsContext } from "../componets/CartProductsContext/CartProductsContext";

export const Cart = () => {
  const { cartProducts, setCartProducts } = useContext(CartProductsContext);

  const handleAdd = (productIndex: number) => {
    const modifiedProducts = [...cartProducts];
    const product = modifiedProducts[productIndex];

    product.amount += 1;

    setCartProducts(modifiedProducts);
  };

  const handleRemove = (productIndex: number) => {
    const modifiedProducts = [...cartProducts];
    const product = modifiedProducts[productIndex];

    product.amount -= 1;

    if (!product.amount) {
      cartProducts.splice(productIndex, 1);

      return setCartProducts([...cartProducts]);
    }
    setCartProducts(modifiedProducts);
  };

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
            {product.price ? (
              <>
                <p>Price: {product.price} $</p>
                <p>Sum: {(product.price * product.amount).toFixed(2)} $</p>{" "}
              </>
            ) : null}
            <div className="button-wrapper">
              <OrangeButton onClick={() => handleAdd(productIndex)}>
                Add product
              </OrangeButton>
              <WhiteButton onClick={() => handleRemove(productIndex)}>
                Remove product
              </WhiteButton>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
};
