import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { Cart } from "../Cart";
import { Products } from "..";
import { NotFoundPage } from "../NotFoundPage";
import { Home } from "../Home";

export const MainRouter = () => {
  return (
    <BrowserRouter>
      <header>
        <Link to="/">Home</Link>
        <Link to="/products">Products</Link>
        <Link to="/cart">Cart</Link>
      </header>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
      <footer></footer>
    </BrowserRouter>
  );
};
