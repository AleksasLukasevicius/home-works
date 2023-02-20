import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Error } from "../../pages/Error";
import { Home } from "../../pages/Home";
import { Products } from "../ProductsContext/Products";
import { Cart } from "../../pages/Cart";
import { Header } from "../Header/Header";
import { Footer } from "../Footer/Footer";

export const Router = () => {
  return (
    <BrowserRouter>
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="*" element={<Error />} />
      </Routes>

      <Footer />
    </BrowserRouter>
  );
};
