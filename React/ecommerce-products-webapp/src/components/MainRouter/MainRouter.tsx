import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Cart } from "../Cart";
import { Products } from "..";
import { NotFoundPage } from "../NotFoundPage";
import { Home } from "../Home";
import { Header } from "../Header";
import { Footer } from "../Footer/Footer";

export const MainRouter = () => {
  return (
    <BrowserRouter>
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>

      <Footer />
    </BrowserRouter>
  );
};
