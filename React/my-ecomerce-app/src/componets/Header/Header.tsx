import { Logo } from "../Logo/Logo";
import { Link } from "react-router-dom";
import { CartProductsContext } from "../CartProductsContext/CartProductsContext";
import { useContext } from "react";

export const Header = () => {
  const { cartProducts } = useContext(CartProductsContext);

  let cartCount = 0;

  cartProducts.forEach((product) => {
    cartCount += product.amount;
  });

  return (
    <header>
      <Link to="/">
        <Logo />
      </Link>
      <nav>
        <Link to="/products">Products</Link>
        <Link to="/cart">
          Cart <span>{cartCount}</span>
        </Link>
      </nav>
    </header>
  );
};
