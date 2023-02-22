import { useContext } from "react";
import type { TProduct } from "../types/TProduct";
import { OrangeButton } from "../componets/Button/Button.styled";
import { CartProductsContext } from "../componets/CartProductsContext/CartProductsContext";
import { ProductsContext } from "../componets/ProductsContext/ProductsContext";

export const Products = () => {
  const { products } = useContext(ProductsContext);
  const { cartProducts, setCartProducts } = useContext(CartProductsContext);

  const handleAddToCart = (product: TProduct, productIndex: number) => {
    const modifyProducts = [...products];

    const isProductInCart = cartProducts.some(
      (cartProduct) => cartProduct.id === product.id
    );

    if (isProductInCart) {
      return setCartProducts((prevCartProducts) => {
        const newCartProducts = prevCartProducts.map((cartProduct) => ({
          ...cartProduct,
          amount:
            cartProduct.id === product.id
              ? cartProduct.amount + 1
              : cartProduct.amount,
        }));

        return newCartProducts;
      });
    }
    setCartProducts([...cartProducts, { ...product, amount: 1 }]);

    modifyProducts[productIndex] = {
      ...product,
      amount: product.amount + 1,
    };

    // modifyProducts[productIndex] = {
    //   ...modifyProducts[productIndex],
    //   amount: modifyProducts[productIndex].amount + 1,
    // };

    // const newPrducts = products.map((curProduct) => {
    //   const isSelectProduct = curProduct.id === product.id;

    //   return {
    //     ...curProduct,
    //     amount: isSelectProduct ? curProduct.amount + 1 : curProduct.amount,
    //   };
    // });
    // setProducts(modifyProducts);
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
            <OrangeButton
              type="submit"
              onClick={() => handleAddToCart(product, productIndex)}
            >
              Add to Cart
            </OrangeButton>
          </div>
        ))}
      </div>
    </main>
  );
};
